import { title } from "process";
import { Project } from "./app/interfaces/project";
import { ProjectsRecord, getXataClient } from "./xata";

const xata = getXataClient();

export const serializeProjects = (projects: ProjectsRecord[]) => {
  return projects.map((project) => project.toSerializable());
};

export const getProjects = async () => {
  return xata.db.projects.getAll();
};

export const getProject = async (id: string) => {
  return xata.db.projects.read(id);
}

export const deleteProject = async (id: string) => {
  return xata.db.projects.delete(id);
}

export const getProjectByTitle = async (title: string) => {
  return xata.db.projects.select(['title']).filter({ title }).getFirst();
}

export const createProject = async (data: Project) => {
  return xata.db.projects.create({
    title: data.title,
    description: data.description,
    image: data.image,
    link: data.link,
    status: data.status.toString(),
    kind: data.kind.toString(),
  });
}
