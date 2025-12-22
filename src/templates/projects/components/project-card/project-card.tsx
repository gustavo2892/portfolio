import { Dictionary } from "@/get-dictionary";
import Image from "next/image";
import { ProjectsType } from "../projects-list/project-list.types";

type ProjectCardProps = ProjectsType & {
  dictionary: Dictionary;
};

export const ProjectCard = ({
  projectName,
  image,
  link,
  dictionary,
  tools,
}: ProjectCardProps) => {
  return (
    <div className="w-full max-w-2xl rounded-[12px] border-[1px] border-secondary-150 bg-secondary-150 overflow-hidden transition-all duration-300 hover:border-[1px]">
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <Image
            src={image}
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>
        <div className="px-2 my-4 space-y-4">
          <h2 className="text-heading-sm text-white line-clamp-3">
            {dictionary.projects[projectName].title}
          </h2>

          <p className="text-secondary-100 text-body-sm line-clamp-3">
            {dictionary.projects[projectName].description}
          </p>
        </div>
        <div className="px-2 my-4 space-y-4 border-t border-secondary-100">
          <p className="text-secondary-100 text-body-sm line-clamp-3 flex flex-col mt-4">
            {tools.map((tool) => (
              <span key={`${projectName}-${tool}`}>- {tool}</span>
            ))}
          </p>
        </div>
        <div className="flex items-center gap-1 border-t border-secondary-100 py-4">
          <a target="_blank" href={link}>
            <Image
              src="/assets/github.svg"
              alt={projectName}
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
