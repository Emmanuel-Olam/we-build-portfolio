import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../error";
import { ProjectService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  req.url = id;

  try {
    const project = await ProjectService.delete(id);
    if (!project) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(204).end();
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
