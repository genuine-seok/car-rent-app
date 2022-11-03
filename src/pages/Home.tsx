import { useState } from "react";

import { Category } from "../components/Category";
import { Header, Loading, NoItem } from "../components/common";
import { ItemList } from "../components/Item";

export type CategoryType = "All" | "C" | "D" | "E" | "SUV";

const Home = () => {
  const categoryList = ["", "C", "D", "E", "SUV"];
  const categoryToKr = ["전체", "소형", "중형", "준대형", "대형"];

  const [activeId, setActiveId] = useState(0);
  const slide = [<ItemList key={0} />, <Loading key={1} />, <NoItem key={2} />];

  return (
    <>
      <Header>전체차량</Header>
      <Category activeId={activeId} setActiveId={setActiveId} />
      {/* TEST: Category 버튼 클릭에 따른 동적 렌더링 */}
      {slide[activeId]}
    </>
  );
};

export default Home;
