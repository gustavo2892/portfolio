import { Activity, Download, SendToBack } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dictionary } from '@/get-dictionary';

export const TechnologiesSection = ({
  dictionary,
}: {
  dictionary: Dictionary,
}) => {
  return (
    <section className="container pb-8 pt-8 md:py-10">
      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 rounded-lg bg-secondary-150 p-6 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-white bg-blue-300 px-2 py-1 w-fit rounded-sm uppercase mt-2 md:mt-0">
              {dictionary.technologies}
            </span>

            <ul className="font-sans text-blue-300 list-disc px-2 md:mt-1">
              <li>HTML/CSS/Javascript/Typescript</li>
              <li>React</li>
              <li>Nextjs</li>
              <li>Vite</li>
              <li>Redux/Zustand/Mobx</li>
              <li>API Rest/GraphQL</li>
              <li>Jest/Vitest</li>
              <li>Tailwind/Styled-Components</li>
              <li>Ant-Design/Chakra-UI/Material-UI/Shadcn</li>
              <li>Storybook</li>
              <li>Nodejs</li>
              <li>React Native</li>
            </ul>

            <Button
              asChild
              className="w-fit rounded-full hidden mt-4 md:mt-auto md:flex cursor-pointer"
            >
              <div>
                {dictionary.curriculum}
                <Download />
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full max-w-md overflow-hidden gap-2">
              <div className="flex flex-col text-left gap-2 rounded-lg p-6 bg-blue-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400 mb-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <strong className="text-heading-sm text-gray-100">
                  {dictionary['agile-methodologies'].title}
                </strong>
                <p className="text-body-sm text-white">
                  {dictionary['agile-methodologies'].description}
                </p>
              </div>
              <div className="flex flex-col text-left gap-2 rounded-lg p-6 bg-blue-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400 mb-4">
                  <SendToBack className="h-6 w-6 text-white" />
                </div>
                <strong className="text-heading-sm text-gray-100">
                  {dictionary['ci-cd-pipeline'].title}
                </strong>
                <p className="text-body-sm text-white">
                  {dictionary['ci-cd-pipeline'].description}
                </p>
              </div>
            </div>
            <Button
              asChild
              className="w-full gap-2 rounded-full mt-4 md:mt-auto md:hidden"
            >
              <div>
                {dictionary.curriculum}
                <Download />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};