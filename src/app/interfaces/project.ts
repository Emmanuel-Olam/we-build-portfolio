export enum ProjectStatus {
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
}

export enum ProjectKind {
  PERSONAL = 'personal',
  PROFESSIONAL = 'professional',
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  status: ProjectStatus;
  kind: ProjectKind;
}
