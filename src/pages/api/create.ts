import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../error";
import {
  createProject,
  getProjectByTitle,
} from "@/services";
import { DynamicObject } from "@/app/interfaces/utils";
import { ProjectKind, ProjectStatus } from "@/app/interfaces/project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, description, image, link, status, kind } = req.body;

  try {
    // Validations
    const errors = {} as DynamicObject;
    const found = await getProjectByTitle(title);
    if (found) {
      errors["title"] = "Title already exists";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // Create project
    const project = await createProject({
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
