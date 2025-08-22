import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tools: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  tools
}: ProjectCardProps) => {
  return (
    <div
      className="w-full max-w-2xl rounded-[12px] border-[1px] border-secondary-200 bg-secondary-200 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-200"
    >
      {/* Post Content */}
      <div className="p-2 rounded-md overflow-hidden">
        {/* Imagem Container */}
        <div className="relative">
          <Image
            src={image}
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>

        {/* Post info */}
        <div className="px-2 my-4 space-y-4">
          <h2 className="text-heading-sm text-secondary-100 line-clamp-3">
            {title}
          </h2>

          <p className="text-secondary-100 text-body-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Post footer */}
        <div className="flex items-center gap-1 border-t border-secondary-100 py-4">
          {
            tools.map((tool) => (
              <Image
                src={`/assets/tools/${tool}.svg`}
                alt={tool}
                width={32}
                height={32}
                key={tool}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};