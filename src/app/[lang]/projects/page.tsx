import { Locale } from "../../../../i18n-config";
import { ProjectsList } from './components';

export default async function ProjectPage(props: {
  params: Promise<{ lang: Locale }>;
}) {

  console.log((await props.params).lang)

  return (
    <div className="flex flex-col py-24 flex-grow h-full w-full">
      <header className="pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
          <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
            <div className="flex flex-col gap-4 md:px-0">
              {/* TAG */}
              <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
                PROJETOS
              </span>

              {/* Titulo */}
              <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
                Projetos
              </h1>
            </div>
          </div>
        </div>

      </header>
      <div className="container space-y-8 mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
        <ProjectsList />
      </div>
    </div>
  );
}
