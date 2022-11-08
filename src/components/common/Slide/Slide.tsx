import { useCarData } from "../../../hooks/useCarData";
import { CarDataType, CategoryType } from "../../../types";
import { getSegmentByCategory } from "../../../utils";
import { ItemList } from "../../Item";
import { Error, Loading } from "..";
import * as S from "./style";

interface SlideProps {
  category: CategoryType;
}

export const Slide = ({ category }: SlideProps) => {
  const segmentParams = getSegmentByCategory(category);

  const { isLoading, isError, data, error, isFetching } =
    useCarData(segmentParams);

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error message={error.message} />;

  // TODO: useCarData에서 selector로 데이터 포매팅
  const items = data?.data.payload as CarDataType[];

  return (
    <S.SlideContainer>
      <ItemList items={items} />
    </S.SlideContainer>
  );
};
