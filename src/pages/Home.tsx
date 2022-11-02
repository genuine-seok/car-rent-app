import { Category } from "../components/Category";
import { Header, Loading, NoItem } from "../components/common";
import { ItemList } from "../components/Item";

const Home = () => {
  return (
    <>
      <Header>전체차량</Header>
      <Category />
      <ItemList />
      {/* <Loading /> */}
      {/* <NoItem /> */}
    </>
  );
};

export default Home;
