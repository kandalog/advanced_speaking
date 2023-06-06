import { en, jp, en2, jp2, en3, jp3 } from "./data";

export type questionType = {
  en: string;
  jp: string;
};

export const questions: questionType[] = [];
export const questions2: questionType[] = [];
export const questions3: questionType[] = [];
// export const questions4: questionType[] = [];

for (let i = 0; i < en.length; i++) {
  questions.push({ en: en[i], jp: jp[i] });
}

for (let i = 0; i < en2.length; i++) {
  questions2.push({ en: en2[i], jp: jp2[i] });
}

for (let i = 0; i < en3.length; i++) {
  questions3.push({ en: en3[i], jp: jp3[i] });
}

// for (let i = 0; i < en4.length; i++) {
//   questions4.push({ en: en4[i], jp: jp4[i] });
// }
