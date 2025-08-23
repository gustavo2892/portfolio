'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useMenuMobile } from '../../menu-mobile.context';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLinkMobile = ({ children, href, ...rest }: ActiveLinkProps) => {
  const linkPath = typeof href === 'string' ? href : href.pathname;
  const pathname = usePathname();
  const isActive =
    pathname === linkPath || pathname?.endsWith(`${linkPath}/`);

  const { closeMenu } = useMenuMobile();

  const handleOnClickLink = () => {
    closeMenu();
  }

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'transition-colors hover:text-blue-300 text-3xl',
        isActive ? 'text-blue-300' : 'text-secondary-200'
      )}
      onClick={() => handleOnClickLink()}
    >
      {children}
    </Link>
  );
};