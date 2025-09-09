import { Dictionary } from '@/get-dictionary';
import { Settings, Code, TabletSmartphone } from 'lucide-react';

export const FeaturesSection = ({
  dictionary,
}: {
  dictionary: Dictionary,
}) => {
  return (
    <section className="relative pb-8">
      <div className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-14 relative">
        <h2 className="text-balance text-center text-heading-lg md:text-heading-xl text-blue-300">
          {dictionary['code-quality']}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400 mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-white">
              {dictionary['clean-code'].title}
            </strong>
            <p className="text-body-sm text-white">
              {dictionary['clean-code'].description}
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400 mb-4">
              <TabletSmartphone className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-white">
              {dictionary.responsiveness.title}
            </strong>
            <p className="text-body-sm text-white">
              {dictionary.responsiveness.description}
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400 mb-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-white">
              {dictionary['unit-tests'].title}
            </strong>
            <p className="text-body-sm text-white">
              {dictionary['unit-tests'].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};