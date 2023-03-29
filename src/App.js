import Router from "./shared/Router";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MenuWrap = styled.nav``;

const Button = styled.button``;

const CurrentPage = styled.div``;

function App() {
  const navigate = useNavigate();

  const location = useLocation();
  console.log("location :>>", location);
  // Home page에 머무를 때 =>
  // pathname: '/', search: '', hash: '', state: null, key: 'iu25n6we'

  return (
    <>
      <MenuWrap>
        <Button
          onClick={() => {
            navigate("./");
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            navigate("/cat/:id");
          }}
        >
          Cat
        </Button>
        <Button
          onClick={() => {
            navigate("/dog");
          }}
        >
          Dog
        </Button>
      </MenuWrap>

      <CurrentPage>
        {location.pathname === "/" ? (
          <></>
        ) : (
          `현재 페이지 : ${location.pathname.slice(1, 4)} page`
        )}
      </CurrentPage>

      <Router />

      <Link to="./">Home으로 이동하기</Link>
    </>
  );
}

export default App;
