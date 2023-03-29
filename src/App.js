import Router from "./shared/Router";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuWrap = styled.nav``;

const Button = styled.button``;

function App() {
  const navigate = useNavigate();
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
            navigate("/cat");
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

      <Router />
    </>
  );
}

export default App;
