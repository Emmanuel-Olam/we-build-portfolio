import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../error";
import { deleteProject } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  req.url = id;

  try {
    const project = await deleteProject(id);

    if (!project) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(204).json({ data: project.toSerializable() });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
