export interface Member {
  slug: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  links?: { label: string; href: string }[];
}

export const members: Member[] = [
  {
    slug: 'bekon',
    name: '太田 拓海',
    role: '代表 / ゲームシステム',
    bio: 'ゲームの立案やシステム設計を担当。',
    avatar: 'https://avatars.githubusercontent.com/u/144572025?v=4',
    links: [
      { label: 'X', href: 'https://twitter.com/Bekon_Unuse' },
      { label: 'GitHub', href: 'https://github.com/otakumi-bekon' },
    ],
  },
  {
    slug: 'shibata',
    name: 'shiruku-shibata',
    role: '組み込みシステム',
    bio: '組み込みシステムの開発を担当。',
    avatar: 'https://avatars.githubusercontent.com/u/104050688?v=4',
    links: [
      { label: 'X', href: 'https://x.com/siru_22' },
      { label: 'GitHub', href: 'https://github.com/shiruku-shibata' },
    ],
  },
  {
    slug: 'tob213',
    name: 'ToB213',
    role: 'ゲームシステム / インフラ',
    bio: 'ゲームシステムとインフラの開発を担当。',
    avatar: 'https://avatars.githubusercontent.com/u/115053448?s=400&u=1fd67f232ce4beafe59f8df8da5e6d19391d48ec&v=4',
    links: [
      { label: 'X', href: 'https://x.com/just_for_ToB' },
      { label: 'GitHub', href: 'https://github.com/ToB213' },
    ],
  },
  {
    slug: 'shu',
    name: 'SHU144',
    role: 'ゲームデザイン',
    bio: 'ゲームデザインを担当。',
    avatar: 'https://pbs.twimg.com/profile_images/1873970976620474368/anaENQoI_400x400.jpg',
    links: [
      { label: 'X', href: 'https://x.com/Hiiragi2147' },
      { label: 'GitHub', href: 'https://github.com/SHU144' },
    ],
  },
  {
    slug: 'chiroru',
    name: 'Taketani Shinjirou ',
    role: 'ゲームデザイン',
    bio: 'ゲームデザインを担当。',
    avatar: 'https://avatars.githubusercontent.com/u/141099556?v=4',
    links: [{ label: 'GitHub', href: 'https://github.com/chiroru-taketani' }],
  },
];
