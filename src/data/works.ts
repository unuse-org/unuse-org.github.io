import beerhythmHeroImage from '~/assets/images/hero-beerhythm.png';
import cinemaOperatorHeroImage from '~/assets/images/hero-cinema-operator.png';
import cubeDePonHeroImage from '~/assets/images/hero-cube-de-pon.png';
import cheersStartsWithDestructionPosterImage from '~/assets/images/poster-cheers-starts-with-destruction.png';
import leafCutterPosterImage from '~/assets/images/poster-leaf-cutter.png';

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
    slug: 'beerhythm',
    title: 'ビアリズム',
    description: '実物のビールジョッキを振ってリズムを刻む音楽ゲーム。',
    image: beerhythmHeroImage,
    tags: ['乾杯'],
    details: 'タイミングよくビールジョッキを振って、たくさんの乾杯を成功させよう。',
    // exhibitions: [''],
  },
  {
    slug: 'cube-de-pon',
    title: 'キューブでポン',
    description: '実際のルービックキューブを使って遊ぶゲーム。',
    image: cubeDePonHeroImage,
    tags: ['ルービックキューブ'],
    details: '実際のルービックキューブを操作して、さまざまなパズルを解いていこう。',
    exhibitions: ['BitSummit 2023', '東京ゲームショウ 2023', 'BIC Festival 2023'],
  },
  {
    slug: 'cinema-operator',
    title: 'シネマオペレーター',
    description: '実際の映写機を操作しながら、劇場の運営をするゲーム。',
    image: cinemaOperatorHeroImage,
    tags: ['映写機'],
    details: 'フィルムを取り替えたり、速度を調整をしたり、本物の映写機を操作して劇場の運営をしよう。',
    exhibitions: ['BitSummit 2025', 'デジゲー博 2025（make.ctrl.Japan様ブース）'],
  },
  {
    slug: 'leaf-cutter',
    title: 'リーフカッター',
    description: '草刈り機のおもちゃを振り回して遊ぶゲーム。',
    image: leafCutterPosterImage,
    tags: ['草刈り'],
    details: '草刈り機のおもちゃを振り回して、さまざまな敵を倒そう。',
    exhibitions: ['東京ゲームショウ 2024'],
  },
  {
    slug: 'cheers-starts-with-destruction',
    title: '乾杯の音頭は破壊から',
    description: '実物のビールジョッキを振ってNPCと乾杯バトルを行う体感型アクションゲーム。',
    image: cheersStartsWithDestructionPosterImage,
    tags: ['乾杯'],
    details: 'タイミングよくビールジョッキを振って上司のビールジョッキを破壊しよう。',
    exhibitions: ['BitSummit 2026'],
  },
];
