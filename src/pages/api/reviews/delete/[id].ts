import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../../error";
import { ReviewService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  req.url = id;

  try {
    const review = await ReviewService.delete(id);

    if (!review) {
      return res.status(404).end();
    }

    res.status(204).json({ data: review.toSerializable() });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
