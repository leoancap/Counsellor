import { NowRequest, NowResponse } from "@now/node";
import { doctors } from "../utils/mockData";

export default (req: NowRequest, res: NowResponse) => {
  res.json(doctors);
};
