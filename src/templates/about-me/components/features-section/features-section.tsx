import { Settings, Code, TabletSmartphone } from 'lucide-react';

export const FeaturesSection = () => {
  return (
    <section className="relative pb-8">
      <div className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-14 relative">
        <h2 className="text-balance text-center text-heading-lg md:text-heading-xl text-blue-300">
          Qualidade de código
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Clean Code
            </strong>
            <p className="text-body-sm text-gray-200">
              Facilidade de manutenção e melhor colaboração entre desenvolvedores.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <TabletSmartphone className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Responsividade
            </strong>
            <p className="text-body-sm text-gray-200">
              Melhor experiência ao usuário em todos os dispositivos e qualidade para SEO.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Testes Unitários
            </strong>
            <p className="text-body-sm text-gray-200">
              Para a detecção precoce de bugs, o que acelera a depuração e reduz custos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};