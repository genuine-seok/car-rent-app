import * as S from "./style";

interface ISection {
  name: string;
}

export const Section = ({ name }: ISection) => {
  return (
    <S.SectionContainer>
      <S.SectionName>{name}</S.SectionName>
    </S.SectionContainer>
  );
};
