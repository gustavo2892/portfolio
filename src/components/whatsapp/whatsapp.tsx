import Image from 'next/image';

export const Whatsapp = () => {
  return (
    <div className="fixed bottom-18 md:bottom-10 lg:bottom-10 right-8 z-50 sm:right-8">
      <span className="relative flex size-20">
        <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative rounded-full bg-transparent">
          <a
            href={'https://api.whatsapp.com/send?phone=5519920002175&text='}
            target="_blank"
          >
            <Image src="/whatsapp.png" alt="whatsapp" width={80} height={32} />
          </a>
        </span>
      </span>
    </div>
  );
}