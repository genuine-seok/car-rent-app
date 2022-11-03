import { categoryMap } from "../../../constant";
import { useCarData } from "../../../hooks/useCarData";
import { CarDataType, CategoryType } from "../../../types";
import { ItemList } from "../../Item";
import { Error } from "../Error/Error";
import { Loading } from "../Loading/Loading";
import * as S from "./style";

interface ISlide {
  category: CategoryType;
}

// TODO: 슬라이딩 인터랙션 구현
export const Slide = ({ category }: ISlide) => {
  const segmentParams = categoryMap[category];

  const { isLoading, isError, data, error, isFetching } =
    useCarData(segmentParams);

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error message={error.message} />;

  const items = data?.data.payload as CarDataType[];

  return (
    <S.SlideContainer>
      <ItemList items={items} />
    </S.SlideContainer>
  );
};
