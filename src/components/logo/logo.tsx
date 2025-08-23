import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  homeLink?: string;
  width?: number;
  height?: number;
};

export const Logo = ({
  homeLink = '',
  height = 32,
  width = 136
}: LogoProps) => {
  const logoComponent = () => {
    return (
      <Image
        src="/logo.svg"
        alt="Logo site"
        width={width}
        height={height}
        className={cn(
          homeLink ? 'hover:opacity-80' : ''
        )}
      />
    );
  };

  if (!homeLink) {
    return logoComponent();
  }

  return (
    <Link href={homeLink} title="Página inicial">
      {logoComponent()}
    </Link>
  );
};