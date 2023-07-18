import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../error";
import { DynamicObject } from "@/app/interfaces/utils";
import { ProjectKind, ProjectStatus } from "@/app/interfaces/project";
import { ProjectService } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, description, image, link, status, kind } = req.body;

  try {
    // Validations
    const errors = {} as DynamicObject;
    const found = await ProjectService.getProjectByTitle(title);
    if (found) {
      errors["title"] = "Title already exists";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // Create project
    const project = await ProjectService.create({
      title,
      description,
      image,
      link,
      status: status as ProjectStatus,
      kind: kind as ProjectKind,
    });

    res.status(201).json({ id: project.id });
  } catch (e) {
    return ErrorResponse(e, res);
  }
}
