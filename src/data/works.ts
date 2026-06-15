import cinemaImage from '~/assets/images/hero-cinema.png';
import cubeDePonImage from '~/assets/images/hero-cube.png';
import leafImage from '~/assets/images/poster-leaf.png';
import kanpaiImage from '~/assets/images/poster-kanpai.png';

export interface Work {
  slug: string;
  title: string;
  description: string;
  image: ImageMetadata;
  tags: string[];
  details?: string;
  exhibitions?: string[];
}

export const works: Work[] = [
  {
    slug: 'cinema-operator',
    title: 'シネマオペレーター',
    description: '実際の映写機を操作しながら、劇場の運営をするゲーム。',
    image: cinemaImage,
    tags: ['映写機'],
    details: 'フィルムを取り替えたり、速度を調整をしたり、本物の映写機を操作して劇場の運営をしよう。',
    exhibitions: ['BitSummit 2025', 'デジゲー博 2025（make.ctrl.Japan様ブース）'],
  },
  {
    slug: 'cube-de-pon',
    title: 'キューブでポン',
    description: '実際のルービックキューブを使って遊ぶゲーム。',
    image: cubeDePonImage,
    tags: ['ルービックキューブ'],
    details: '実際のルービックキューブを操作して、さまざまなパズルを解いていこう。',
    exhibitions: ['BitSummit 2023', '東京ゲームショウ 2023', 'BIC Festival 2023'],
  },
  {
    slug: 'leaf-cutter',
    title: 'リーフカッター',
    description: '草刈り機のおもちゃを振り回して遊ぶゲーム。',
    image: leafImage,
    tags: ['草刈り'],
    details: '草刈り機のおもちゃを振り回して、さまざまな敵を倒そう。',
    exhibitions: ['東京ゲームショウ 2024'],
  },
  {
    slug: 'kanpai',
    title: '乾杯の音頭は破壊から',
    description: '実物のビールジョッキを振ってNPCと乾杯バトルを行う体感型アクションゲーム。',
    image: kanpaiImage,
    tags: ['乾杯'],
    details: 'タイミングよくビールジョッキを振って上司のビールジョッキを破壊しよう。',
    exhibitions: ['BitSummit 2026'],
  },
];
