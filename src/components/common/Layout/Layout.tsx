import { Outlet } from "react-router-dom";

import * as S from "./style";

const Layout = () => {
  return (
    <S.LayoutContatiner>
      <S.LayoutSizeWarning>
        가로 길이 360px ~ 450px에 최적화 되어있습니다. 창의 크기를 조절해주세요
      </S.LayoutSizeWarning>
      <Outlet />
    </S.LayoutContatiner>
  );
};

export default Layout;
