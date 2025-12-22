import { Dictionary } from "@/get-dictionary";
import { ProjectCard, ProjectGridCard } from "../";
import { PROJECTS_DATA } from "./projects_data";

export const ProjectsList = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <ProjectGridCard>
      {PROJECTS_DATA.map((project) => {
        return (
          <ProjectCard
            projectName={project.projectName}
            image={project.image}
            link={project.link}
            key={project.projectName}
            dictionary={dictionary}
            tools={project.tools}
          />
        );
      })}
    </ProjectGridCard>
  );
};
