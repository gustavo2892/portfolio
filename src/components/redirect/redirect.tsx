'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation'

type RedirectProps = {
  link: string;
}

export const Redirect = ({ link }: RedirectProps) => {
  useEffect(() => {
    redirect(link);
  }, [link])

  return <div/>;
}
