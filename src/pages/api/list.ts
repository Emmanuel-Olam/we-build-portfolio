import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../error";
import { ProjectService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projects = ProjectService.serialize(await ProjectService.getAll());
    res.status(200).json({ data: projects });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
