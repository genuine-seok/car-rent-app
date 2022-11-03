import * as S from "./style";

interface SectionItemProps {
  label: string;
  value: string | number;
}

export const SectionItem = ({ label, value }: SectionItemProps) => {
  return (
    <S.SectionItemBlock>
      <S.SectionItemLabel>{label}</S.SectionItemLabel>
      <S.SectionItemValue>{value}</S.SectionItemValue>
    </S.SectionItemBlock>
  );
};
