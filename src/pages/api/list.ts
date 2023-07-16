import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../error";
import { getProjects, serializeProjects } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projects = serializeProjects(await getProjects());
    res
      .status(200)
      .json({ data: projects });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
