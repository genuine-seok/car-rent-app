import { Category } from "../components/Category";
import { Header, Slide } from "../components/common";
import { CATEGORY_LIST } from "../constant";
import { useUI } from "../contexts/uiContext";
import { CategoryType } from "../types";
import { getIdByCategory } from "../utils";

const slides = CATEGORY_LIST.map((category) => (
  <Slide key={category} category={category} />
));

const getSlideByCategory = (category: CategoryType) => {
  const id = getIdByCategory(category);
  return slides[id];
};

const Home = () => {
  const { category } = useUI();

  return (
    <>
      <Header>전체차량</Header>
      {/* TODO: SEO 적용하기 */}
      {/* <Head carData={carData} /> */}
      <Category />
      {getSlideByCategory(category)}

      {/* TODO: 좌-우 슬라이딩 인터랙션 구현 */}
      {/* {CATEGORY_LIST.map((item) => (
        <Slide key={item} category={item} />
      ))} */}
    </>
  );
};

export default Home;
