import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../error";
import { ReviewService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const reviews = ReviewService.serialize(await ReviewService.getAll());
    res.status(200).json({ data: reviews });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
