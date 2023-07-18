import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../error";
import { ReviewService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  try {
    const review = await ReviewService.get(id);

    if (!review) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: review.toSerializable() });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
