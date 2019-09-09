import React, {
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { getTimezone } from "utils/getTimezone";
import moment from "moment";

const getCalendarStructure = (calendarStep: number) => [
  moment().add(calendarStep, "d"),
  moment().add(1 + calendarStep, "d"),
  moment().add(2 + calendarStep, "d"),
  moment().add(3 + calendarStep, "d"),
];

const initialState = {
  timezone: getTimezone(),
  calendarStep: 0,
  calendarStructure: getCalendarStructure(0),
};

interface IAppState {
  timezone: string;
  calendarStep: number;
  calendarStructure: moment.Moment[];
}

type IAppAction = Dispatch<SetStateAction<IAppState>>;

const AppContext = createContext<[IAppState, IAppAction] | null>(null);

interface IProps {
  children: React.ReactChild;
}

const AppProvider = ({ children }: IProps) => {
  const [appState, setAppState] = useState<IAppState>(initialState);
  const { calendarStep } = appState;

  useEffect(() => {
    setAppState({
      ...appState,
      calendarStructure: getCalendarStructure(calendarStep),
    });
  }, [calendarStep]);

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
