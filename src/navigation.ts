import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Concept',
      href: getPermalink('/#concept'),
    },
    {
      text: 'Works',
      href: getPermalink('/works'),
    },
    {
      text: 'Members',
      href: getPermalink('/members'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Concept', href: getPermalink('/#concept') },
        { text: 'Works', href: getPermalink('/works') },
        { text: 'Members', href: getPermalink('/members') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/UNUSE_AIT' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/unuse-org' },
  ],
  footNote: `
    &copy; ununse. All rights reserved.
  `,
};
