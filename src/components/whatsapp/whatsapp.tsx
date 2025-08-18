import Image from 'next/image';

export const Whatsapp = () => {
  return (
    <a
      className="fixed botton-5 right-5 z-99 hover:opacity-80"
      style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 10 }}
      href={'https://api.whatsapp.com/send?phone=5519920002175&text='}
      target="_blank"
    >
      <Image src="/whatsapp.png" alt="whatsapp" width={80} height={32} />
    </a>
  );
}