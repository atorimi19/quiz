const questions = [
  {
    id: 1,
    question: 'RGBカラーが使用される機器はどれか。',
    choices: [
      '印刷機',
      'ディスプレイ',
      '水彩絵具',
      'ポスターカラー'
    ],
    answer: 1,
    explanation: 'RGBは光の三原色。ディスプレイなどで使用される。'
  },

  {
    id: 2,
    question: '3DCGで立体を作る工程はどれか。',
    choices: [
      'モデリング',
      'レンダリング',
      'ライティング',
      'コンポジット'
    ],
    answer: 0,
    explanation: 'モデリングは3D形状を作る工程。'
  },

  {
    id: 3,
    question: '補色の組み合わせとして正しいものはどれか。',
    choices: [
      '赤と緑',
      '赤と橙',
      '青と水色',
      '黄と橙'
    ],
    answer: 0,
    explanation: '色相環で反対に位置する色同士を補色という。'
  },

  {
    id: 4,
    question: '著作権が発生するタイミングとして正しいものはどれか。',
    choices: [
      '登録時',
      '販売時',
      '創作時',
      '公開時'
    ],
    answer: 2,
    explanation: '日本の著作権は創作時点で自動発生する。'
  },

  {
    id: 5,
    question: 'CMYKカラーが主に使用されるものはどれか。',
    choices: [
      'スマートフォン',
      'ディスプレイ',
      '印刷物',
      'LED看板'
    ],
    answer: 2,
    explanation: 'CMYKは印刷用インクの色表現。'
  },

  {
    id: 6,
    question: '3DCGで光源を配置する工程はどれか。',
    choices: [
      'モデリング',
      'ライティング',
      'リギング',
      'コンポジット'
    ],
    answer: 1,
    explanation: 'ライティングは光の設定を行う工程。'
  },

  {
    id: 7,
    question: '暖色として適切なものはどれか。',
    choices: [
      '青',
      '紫',
      '赤',
      '青緑'
    ],
    answer: 2,
    explanation: '赤や橙は暖色に分類される。'
  },

  {
    id: 8,
    question: '遠くのものを小さく描く技法はどれか。',
    choices: [
      'パース',
      'トリミング',
      'モンタージュ',
      'レタッチ'
    ],
    answer: 0,
    explanation: 'パースは遠近感を表現する技法。'
  },

  {
    id: 9,
    question: '色の鮮やかさを表す属性はどれか。',
    choices: [
      '色相',
      '彩度',
      '明度',
      '温度'
    ],
    answer: 1,
    explanation: '彩度は色の鮮やかさを表す。'
  },

  {
    id: 10,
    question: '著作権で保護されにくいものはどれか。',
    choices: [
      'イラスト',
      '小説',
      '音楽',
      'アイデア'
    ],
    answer: 3,
    explanation: '著作権は表現を保護し、アイデア自体は保護しない。'
  },

  {
    id: 11,
    question: '動画を静止画連続で動かして見せる原理はどれか。',
    choices: [
      '屈折',
      '干渉',
      '残像効果',
      '散乱'
    ],
    answer: 2,
    explanation: 'アニメーションは残像効果を利用している。'
  },

  {
    id: 12,
    question: '補色関係にある組み合わせはどれか。',
    choices: [
      '赤と緑',
      '赤と黄',
      '青と水色',
      '黄と橙'
    ],
    answer: 0,
    explanation: '補色は色相環で反対位置にある色。'
  },

  {
    id: 13,
    question: '3DCGで画像として出力する工程はどれか。',
    choices: [
      'モデリング',
      'レンダリング',
      'リギング',
      'UV展開'
    ],
    answer: 1,
    explanation: 'レンダリングは最終画像を生成する工程。'
  },

  {
    id: 14,
    question: '白を混ぜて明るくした色調はどれか。',
    choices: [
      'ペールトーン',
      'ダークトーン',
      'ディープトーン',
      'グレイッシュ'
    ],
    answer: 0,
    explanation: 'ペールトーンは淡く明るい色調。'
  },

  {
    id: 15,
    question: '引用時に必要な条件として適切でないものはどれか。',
    choices: [
      '出典明記',
      '引用部分明示',
      '全文転載',
      '主従関係'
    ],
    answer: 2,
    explanation: '引用でも全文転載は基本的に認められない。'
  },

  {
    id: 16,
    question: '3DCGモデル表面に模様を貼る処理はどれか。',
    choices: [
      'マッピング',
      'リギング',
      'スカルプト',
      'コンポジット'
    ],
    answer: 0,
    explanation: 'マッピングで貼られる画像素材の事をテクスチャという。'
  },

  {
    id: 17,
    question: '色の三属性に含まれないものはどれか。',
    choices: [
      '色相',
      '彩度',
      '明度',
      '密度'
    ],
    answer: 3,
    explanation: '色の三属性は色相・明度・彩度。'
  },

  {
    id: 18,
    question: 'ゲームタイトル名に関係しやすい権利はどれか。',
    choices: [
      '商標権',
      '漁業権',
      '鉱業権',
      '育成者権'
    ],
    answer: 0,
    explanation: 'タイトルやロゴは商標権で保護されることが多い。'
  },

  {
    id: 19,
    question: '3DCGで骨組みを設定する工程はどれか。',
    choices: [
      'レンダリング',
      'リギング',
      'ライティング',
      'コンポジット'
    ],
    answer: 1,
    explanation: 'リギングはキャラクターへ骨構造を設定する工程。'
  },

  {
    id: 20,
    question: '寒色として最も適切な色はどれか。',
    choices: [
      '赤',
      '橙',
      '青',
      '黄'
    ],
    answer: 2,
    explanation: '青系は寒色に分類される。'
  },

  {
    id: 21,
    question: 'SNS画像の無断転載について正しいものはどれか。',
    choices: [
      '必ず自由',
      '著作権侵害になる場合がある',
      'フォロワーが少なければ自由',
      '出典を書けば自由'
    ],
    answer: 1,
    explanation: 'ネット上の画像にも著作権は存在する。'
  },

  {
    id: 22,
    question: '立体感を表現するために重要なものはどれか。',
    choices: [
      '陰影',
      '句読点',
      '字幕',
      '余白'
    ],
    answer: 0,
    explanation: '陰影は立体感や奥行き表現に重要。'
  },

  {
    id: 23,
    question: '色相環で隣り合う色同士を何というか。',
    choices: [
      '補色',
      '類似色',
      '反対色',
      '残像色'
    ],
    answer: 1,
    explanation: '近い位置の色同士を類似色という。'
  },

  {
    id: 24,
    question: '著作権法で保護される対象として適切なものはどれか。',
    choices: [
      '法律',
      '判決文',
      '創作的イラスト',
      '単語1文字'
    ],
    answer: 2,
    explanation: '創作性のある表現は著作物となる。'
  },

  {
    id: 25,
    question: '3DCGで複数映像を合成する工程はどれか。',
    choices: [
      'コンポジット',
      'モデリング',
      'UV展開',
      'スカルプト'
    ],
    answer: 0,
    explanation: 'コンポジットは映像素材を合成する工程。'
  }
]

export default questions