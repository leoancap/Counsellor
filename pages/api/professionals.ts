import { NowRequest, NowResponse } from "@now/node";
import { generateProfessionals } from "utils/mockData";

export default (req: NowRequest, res: NowResponse) => {
  const { startDate, endDate } = req.query;
  res.json(generateProfessionals(+startDate, +endDate));
};
