import React from "react";
import styled from "styled-components";
import { BsTwitch } from "react-icons/bs";

const Footer = () => {
  return (
    <div >
      <Container>
        <Hold>
          <First />
          <BoldText>Join the Twitch Community! </BoldText>
          <Dimtext>Discover the best live streams anywhere.</Dimtext>
        </Hold>
        <SignUp>Sign Up</SignUp>
      </Container>
    </div>
  );
};

export default Footer;
const First = styled(BsTwitch)`
font-size: 30px;
margin: 0 20px;
transition: all 450ms;

:hover{
    cursor: pointer;
    transform: scale(1.18);
}
`;


const SignUp = styled.button`
  margin: 0 30px;
  width: 85px;
  border-radius: 5px;
  border: none;
  height: 32px;
  font-weight: 700;
  transition: all 550ms;
  
  :hover {
      cursor: pointer;
      transform: scale(1.10);
    }
`;

const Hold = styled.div`
  display: flex;
`;

const Dimtext = styled.div`
  margin: 0 15px;
  font-weight: 400px;
`;
const BoldText = styled.div`
  font-weight: 700;
  margin-left: 20px;
`;

const Container = styled.div`
  height: 60px;
  width: 100%;
  z-index: 10px;
  background-color: #c534c5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  
`;
