import { useState } from "react";

import { Category } from "../components/Category";
import { Header, Slide } from "../components/common";
import { category } from "../constant";

const Home = () => {
  const [activeId, setActiveId] = useState(0);
  const slide = category.map((item) => <Slide key={item} category={item} />);

  return (
    <>
      <Header>전체차량</Header>
      {/* TODO: SEO 적용하기 */}
      {/* <Head carData={carData} /> */}
      <Category activeId={activeId} setActiveId={setActiveId} />
      {slide[activeId]}
    </>
  );
};

export default Home;
