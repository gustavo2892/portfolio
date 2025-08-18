'use client';

import { socialLinks } from './social.enum';

export const Social = () => {
  const handleSocialView = (url: string) => {
    return window.open(
      url,
      '_blank',
      'width=600, height=600, location=yes, status=yes'
    );
  }

  return (
    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
      {socialLinks.map((info) => (
        <a
          key={info.name}
          onClick={() => handleSocialView(info.url)}
          className="w-fit md:w-full flex flex-row justify-start gap-2 text-white hover:text-blue-200 cursor-pointer"
        >
          {info.icon}
          <span>{info.name}</span>
        </a>
      ))}
    </nav>
  )
}