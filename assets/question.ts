import { en, jp } from "./data";

type questionType = {
  en: string;
  jp: string;
};

export const questions: questionType[] = [];

for (let i = 0; i < en.length; i++) {
  questions.push({ en: en[i], jp: jp[i] });
}
