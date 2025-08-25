import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="container relative flex items-start justify-start">
      <div className="flex md:grid md:grid-cols-2 gap-1 min-h-[20rem] md:h-[33rem] lg:h-[24rem] xl:h-[20rem] flex-col">
        <div className="flex flex-col items-center justify-center md:justify-start gap-4 md:items-start lg:items-start">
          <h1 className="text-blue-300 text-heading-sm font-sans text-justify">
            Olá, sou Gustavo, e trabalho como desenvolvedor desde 2018. Atualmente sou desenvolvedor front-end com foco em React, mas também tenho uma breve experiência no back-end com Node e no mobile com React-Native. Acredito ter como principais pontos fortes o trabalho em equipe, pois a colaboração é essencial para alcançar os melhores resultados tanto no produto final, como no desenvolvimento da equipe como um todo. Também tenho foco na experiência do usuário final, garantindo que cada aplicação seja entregue respeitando os requisitos, com foco na experiência simples e eficiente de usar. Estou sempre em busca de evoluir minhas habilidades, acompanhar as tendências do mercado e criar soluções que entregam valor ao usuário final.
          </h1>
        </div>

        <div className="flex h-[14rem] md:h-full order-first md:order-last md:items-start justify-center md:flex lg:flex mb-8 md:mb-0">
          <Image
            src="/assets/photo.jpg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={150}
            height={150}
            className="w-auto object-contain rounded-[2.5rem] md:rounded-full"
          />
        </div>
      </div>
    </section>
  );
};