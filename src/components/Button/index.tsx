import { useState, useEffect } from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    setBtnDisabled(!isValid);
  }, [isValid]);

  return (
    <ButtonContainer onClick={onClick} disabled={btnDisabled}>
      {title}
    </ButtonContainer>
  );
};


export default Button;
