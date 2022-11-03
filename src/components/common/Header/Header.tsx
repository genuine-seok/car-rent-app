import { ReactNode } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button/Button";
import * as S from "./style";

type HeaderProps = {
  isPrevious?: boolean;
  children: ReactNode;
};

export const Header = ({ isPrevious = false, children }: HeaderProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.HeaderBlock>
      {isPrevious && <Button icon={<MdArrowBack />} onClick={goBack} />}
      {children}
    </S.HeaderBlock>
  );
};
