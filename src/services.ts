import { JSONData, SelectedPick, XataRecord } from "@xata.io/client";
import { Project } from "./app/interfaces/project";
import { ProjectsRecord, ReviewsRecord, getXataClient } from "./xata";
import { TReview } from "./app/interfaces/reviews";

const xata = getXataClient();

/**
 * XataService is a generic interface that defines the methods that are
 * available on all Xata services.
 */
interface XataService<
  K extends XataRecord<XataRecord<any>>,
  T = Readonly<SelectedPick<K, ["*"]>>,
> {
  getAll: () => Promise<T[]>;
  get: (id: string) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
  create: (data: any) => Promise<T>;
  serialize: (data: T[]) => JSONData<XataRecord<any>>[];
}

class ProjectServiceImp implements XataService<ProjectsRecord> {
  async getAll() {
    return xata.db.projects.getAll();
  }

  async get(id: string) {
    return xata.db.projects.read(id);
  }

  async delete(id: string) {
    return xata.db.projects.delete(id);
  }

  async create(data: Project) {
    return xata.db.projects.create({
      title: data.title,
      description: data.description,
      image: data.image,
      link: data.link,
      status: data.status.toString(),
      kind: data.kind.toString(),
    });
  }

  async getProjectByTitle(title: string) {
    return xata.db.projects.select(['title']).filter({ title }).getFirst();
  }

  serialize(data: ProjectsRecord[]) {
    return data.map((project) => project.toSerializable());
  }
}

class ReviewServiceImp implements XataService<ReviewsRecord>{
  async getAll() {
    return xata.db.reviews.getAll();
  }

  async get(id: string) {
    return xata.db.reviews.read(id);
  }

  async delete(id: string) {
    return xata.db.reviews.delete(id);
  }

  async create(data: TReview) {
    return xata.db.reviews.create({
      name: data.name,
      body: data.body,
      image: data.image,
      project: data.project,
    });
  }

  serialize(data: ReviewsRecord[]) {
    return data.map((project) => project.toSerializable());
  }
}

export const ProjectService = new ProjectServiceImp();
export const ReviewService = new ReviewServiceImp();

