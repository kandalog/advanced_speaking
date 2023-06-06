import {
  questions as materialQuestion,
  questions2,
  questions3,
  questionType,
} from "@/assets/question";
import { useState } from "react";

import styled from "@/styles/Home.module.scss";
import { Button } from "@/components/Button";

// データを押した時の処理
const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget.nextElementSibling;
  target && target.classList.toggle("active");
};

export default function Home() {
  const [questions, setQuestions] = useState(materialQuestion);

  // シャッフルボタン
  const shuffleButton = () => {
    setQuestions((prevState) => shuffle([...prevState]));
  };

  // リバースボタン
  const reverseQuestion = () => {
    setQuestions((prevState) => {
      const newState = prevState.map((data) => {
        return { jp: data.en, en: data.jp };
      });
      return newState;
    });
  };

  // ALL ON
  const toggleShow = () => {
    const elements = document.querySelectorAll("span");

    console.log(
      elements[0].firstElementChild?.firstElementChild?.nextElementSibling
    );
    for (let i = 0; i < elements.length; i++) {
      elements[
        i
      ].firstElementChild?.firstElementChild?.nextElementSibling?.classList.toggle(
        "active"
      );
    }
  };

  // 質問を変更する
  function changeQuestion(question: questionType[]) {
    setQuestions(question);
  }

  return (
    <>
      <header className={styled.header}>
        <Button text="S" name="" onClick={shuffleButton} />
        <Button text="R" name="" onClick={reverseQuestion} />
        <Button text="T" name="" onClick={toggleShow} />
      </header>
      <div className={styled.inner}>
        <Button
          text="1"
          name="first"
          onClick={() => changeQuestion(materialQuestion)}
        />
        <Button
          text="2"
          name="second"
          onClick={() => changeQuestion(questions2)}
        />
        <Button
          text="3"
          name="third"
          onClick={() => changeQuestion(questions3)}
        />
        {questions.map((question) => (
          <span key={question.en}>
            <div className={styled.question}>
              <p onClick={(e) => handleOnClick(e)}>{question.en}</p>
              <div className={styled.hidden}>
                <p>{question.jp}</p>
              </div>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

// シュッフル機能
function shuffle(a: any) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
