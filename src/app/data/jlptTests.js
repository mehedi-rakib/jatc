/**
 * JLPT practice test data.
 *
 * NOTE: the `answer` values are carried over verbatim from the original
 * Test1–Test4 components — see README notes before changing any of them.
 */
export const jlptTests = {
  1: {
    title: "JLPT Test 1",
    level: "Vocabulary",
    description: "Match each definition to the verb that means it.",
    questions: [
      {
        question: "人をだます",
        options: ["いじる", "あざむく", "あきれる", "あわてる"],
        answer: "あざむく",
      },
      {
        question: "社や事業を経営する",
        options: ["まかなう", "いたわる", "いとなむ", "うけいれる"],
        answer: "いとなむ",
      },
      {
        question: "秘密や本心を人に話す",
        options: ["うけとめる", "とがめる", "しあげる", "うちあける"],
        answer: "うちあける",
      },
      {
        question: "指先ではさんで持つ",
        options: ["つるす", "つぶる", "つまむ", "つのる"],
        answer: "つまむ",
      },
      {
        question: "途中で諦める",
        options: ["なげだす", "とりだす", "となえる", "おしむ"],
        answer: "なげだす",
      },
    ],
  },
  2: {
    title: "JLPT Test 2",
    level: "Vocabulary",
    description: "Choose the word that best completes each sentence.",
    questions: [
      {
        question: "山田さんは、一泊7万円の _______ 級ホテルに泊まったそうです。",
        options: ["特", "高", "新", "若"],
        answer: "高",
      },
      {
        question: "小学生の入場 _______ はかかりません。",
        options: ["金", "費", "料", "代"],
        answer: "金",
      },
      {
        question: "たくさん勉強したのに、試験に合格できなくて、_______ 。",
        options: ["うれしい", "あやしい", "ありがたい", "くやしい"],
        answer: "くやしい",
      },
      {
        question: "毎日運動しても、すぐに効果が _______ わけではありません。",
        options: ["満ちる", "起きる", "出る", "進む"],
        answer: "出る",
      },
      {
        question: "駅前のスーパーが24時間営業になって、 _______ 便利になった。",
        options: ["一段", "一層", "一体", "一部"],
        answer: "一部",
      },
    ],
  },
  3: {
    title: "JLPT Test 3",
    level: "Grammar",
    description: "Choose the grammar pattern that fits each sentence.",
    questions: [
      {
        question: "祭り _______ 質問は、下記の電話番号までお願いします。",
        options: ["に対して", "に関する", "について", "にしての"],
        answer: "に関する",
      },
      {
        question: "この町は、世界中から観光客が集まる _______ 有名です。",
        options: ["ことを", "ことに", "ことの", "ことで"],
        answer: "ことに",
      },
      {
        question: "代金をいただいてからでないと、商品はお渡し _______ 。",
        options: ["しませんでした", "できません", "します", "できます"],
        answer: "できます",
      },
      {
        question: "彼が手伝ってくれた  _______ 、仕事が早く終わった。",
        options: ["せいで", "ためで", "ばかりで", "おかげで"],
        answer: "ばかりで",
      },
      {
        question: "4月なのに雪が降った。まるで、冬の _____ 。",
        options: ["かもしれない", "みたいだ", "ようだ", "だった"],
        answer: "みたいだ",
      },
    ],
  },
  4: {
    title: "JLPT Test 4",
    level: "Grammar",
    description: "Complete each sentence with the correct verb form.",
    questions: [
      {
        question: "しゅくだいはもう _______ しまいました。",
        options: ["やる", "おわり", "やって", "やった"],
        answer: "やって",
      },
      {
        question: "かいぎの前にへやのれいぼうを　_______　おいてください。",
        options: ["つけた", "つけて", "つけたい", "つける"],
        answer: "つけて",
      },
      {
        question: "旅行する前にガイドブックを買って _______。",
        options: ["おきない", "ねます", "おきます", "おきた"],
        answer: "おきます",
      },
      {
        question: "つくえはそのままに　_______ おいてください。",
        options: ["する", "して", "した", "うえ"],
        answer: "する",
      },
      {
        question: "へやを出るときは、まどをしめて _______　ほうがいいですよ。",
        options: ["ある", "いた", "います", "おいた"],
        answer: "おいた",
      },
    ],
  },
};

export const testIds = Object.keys(jlptTests);

export const resultComments = {
  perfect: "Flawless, you are a star!",
  excellent: "Outstanding, very noble.",
  good: "Exceeds expectations.",
  average: "Acceptable or luck?",
  bad: "More studying perhaps?",
  poor: "That was not good...",
  worst: "Keep practising — contact JATC!",
};

export function getResultComment(percentage) {
  if (percentage === 100) return resultComments.perfect;
  if (percentage > 90) return resultComments.excellent;
  if (percentage > 70) return resultComments.good;
  if (percentage > 50) return resultComments.average;
  if (percentage > 35) return resultComments.bad;
  if (percentage > 20) return resultComments.poor;
  return resultComments.worst;
}
