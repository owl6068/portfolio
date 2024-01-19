import { Link } from "react-router-dom";
import { NotFoundWrap } from "../css/page/notfound";
import { GlobalStyle } from "../css/reset";
function NotFound() {
  return (
    <NotFoundWrap>
      <GlobalStyle />
      <h2>
        <img src="/img/warning.png" alt="" />
        요청하신 페이지를 찾을 수 없습니다.
      </h2>
      <p>페이지 주소가 잘못 입력되었거나, 없는 페이지 입니다.</p>
      <Link to="/">돌아가기</Link>
    </NotFoundWrap>
  );
}

export default NotFound;
