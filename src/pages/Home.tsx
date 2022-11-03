import { useState } from "react";

import { Category } from "../components/Category";
import { Header, Slide } from "../components/common";
import { CATEGORY_LIST } from "../constant";

const slides = CATEGORY_LIST.map((item) => (
  <Slide key={item} category={item} />
));
const displaySlideByCategory = (activeId: number) => slides[activeId];

const Home = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      <Header>전체차량</Header>
      {/* TODO: SEO 적용하기 */}
      {/* <Head carData={carData} /> */}
      <Category activeId={activeId} setActiveId={setActiveId} />
      {displaySlideByCategory(activeId)}
    </>
  );
};

export default Home;
