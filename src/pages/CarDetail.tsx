import { Navigate, useLocation } from "react-router-dom";

import { Header } from "../components/common";
import ItemDetail from "../components/Item/ItemDetail";
import { CarDataType } from "../types";

const CarDetail = () => {
  const { state } = useLocation();
  if (!state) return <Navigate to="/" replace />;

  const { carData }: { carData: CarDataType } = state;

  return (
    <>
      {/* <Head carData={carData} /> */}
      <Header>차량상세</Header>
      <ItemDetail carData={carData} />
    </>
  );
};

export default CarDetail;
