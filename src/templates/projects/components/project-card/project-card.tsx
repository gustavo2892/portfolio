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
      className="w-full max-w-2xl rounded-[12px] border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
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
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Post footer */}
        <div className="flex items-center gap-1 border-t border-gray-400 py-4">
          {
            tools.map((tool) => (
              <Image
                src={`/${tool}.svg`}
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