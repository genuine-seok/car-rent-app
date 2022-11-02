import { Route, Routes } from "react-router-dom";

import Layout from "./components/common/Layout/Layout";
import CarDetail from "./pages/CarDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<CarDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
