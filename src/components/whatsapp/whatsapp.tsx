import Image from 'next/image';

export const Whatsapp = () => {
  return (
    <a
      className="fixed bottom-18 md:bottom-10 lg:bottom-10 right-8 z-50 sm:right-8 hover:opacity-90"
      href={'https://api.whatsapp.com/send?phone=5519920002175&text='}
      target="_blank"
    >
      <Image src="/whatsapp.png" alt="whatsapp" width={80} height={32} />
    </a>
  );
}

// 