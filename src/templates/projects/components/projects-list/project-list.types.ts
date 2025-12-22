export type NameProjectsType = "petshop" | "task-list";

export type ProjectsType = {
  projectName: NameProjectsType;
  image: string;
  link: string;
  tools: string[];
};
