import Image from 'next/image';
import Link from 'next/link';

export const Logo = (props: { homeLink: string }) => {
  const { homeLink } = props;

  return (
    <Link href={homeLink ?? ''} title="Página inicial">
      <Image src="/logo.svg" alt="Logo site" width={156} height={32} />
    </Link>
  );
};