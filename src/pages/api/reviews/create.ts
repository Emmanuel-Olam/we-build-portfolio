import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../error";
import { ReviewService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, body, image, project } = req.body;

  try {
    const review = await ReviewService.create({
      name,
      body,
      image,
      project,
    });

    res.status(201).json({ id: review.id });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
