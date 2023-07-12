import React, { useState } from "react";
import styled from "styled-components";

import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const Sider = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  function onToggle() {
    setToggle(!toggle);
  }
  return (
    <Container width={toggle}>
      <BigText>
        <Rec>Recommended</Rec>
        <Main onClick={onToggle}>{toggle ? <Icon2 /> : <Icon1 />}</Main>
        <IconHold>
          <Icons></Icons>
        </IconHold>
      </BigText>
    </Container>
  );
};

export default Sider;
const Icons = styled.div``;
const IconHold = styled.div``;

const Rec = styled.div`
  font-weight: 800;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  display: flex;
  margin-right: 20px;
`;

const BigText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 30px;
`;

const Icon1 = styled(BsArrowBarLeft)`
  font-size: 30px;
`;

const Icon2 = styled(BsArrowBarRight)`
  font-size: 30px;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
 font-weight: 600;
  color: black;
  transition: all 350ms;

  :hover {
    color: purple;
    cursor: pointer;
  }
`;

const Container = styled.div<{ width: any }>`

  height: 100vh;
  width: ${({ width }) => (width ? "50px" : "250px")};
  color: white;
  background-color: #bdbdbd;
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
  position: fixed;
`;
