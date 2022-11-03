import * as S from "./style";

type ErrorProps = {
  message: string;
};

export const Error = ({ message }: ErrorProps) => {
  return <S.ErrorBlock>{`오류: ${message}`}</S.ErrorBlock>;
};
