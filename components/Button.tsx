import React from "react";
import styled from "@/styles/Home.module.scss";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  name: string;
};

export const Button = (props: Props) => {
  const name = props.name;
  return (
    <button className={`${styled.btn} ${styled[name]}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
