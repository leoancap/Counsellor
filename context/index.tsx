import React, { useState, useContext } from "react";
import { getTimezone } from "utils/getTimezone";

const initialState = {
  timezone: getTimezone(),
};

const AppContext = React.createContext(null);

interface IProps {
  children: React.ReactChild;
}

const AppProvider = ({ children }: IProps) => {
  const [appState, setAppState] = useState<typeof initialState>(initialState);

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
