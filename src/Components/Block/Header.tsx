import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import {MdMessage, MdManageAccounts} from "react-icons/md"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Section>
            <Items> Team-2 </Items>
            <Icon> </Icon>
          </Section>
          <Section>
            <SearchHolder>
              <SearchBar placeholder="Search for receipe"></SearchBar>
              <SearchIcon></SearchIcon>
            </SearchHolder>
          </Section>
          <Section1>
            <Log1/>
            <ButtonHold>
              <Login>Log in</Login>
              <Signup>Sign up</Signup>
            </ButtonHold>
            <Log2/>
          </Section1>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Signup = styled.button`
width: 80px;
height: 33px;
background: #772CE8;
color: white;
border: none;
border-radius: 5px;
transition: all 350ms;
font-weight: 900px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serify;
:hover{
  cursor: pointer;
  background-color: #9556f4;
}
`;

const Login = styled.button`
width: 70px;
height: 33px;
background: #DEDEE1;
border: none;
border-radius: 5px;
transition: all 350ms;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

:hover{
  cursor: pointer;
  background: #bfbfc1;
  color: white;
}
`;
const ButtonHold = styled.div`
display: flex;
width: 65%;
justify-content: space-between;
align-items: center;
height: 40px;
`;

const Log2 = styled(MdManageAccounts)`
font-size: 25px;
transition: all 350ms;
color:  #414141;

:hover{
  cursor: pointer;
  color: purple;
}
`;

const Log1 = styled(MdMessage)`
font-size: 21px;
transition: all 350ms;
color:  #414141;


:hover{
  cursor: pointer;
  color: purple;
}
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18%;
  height: 40px;
  /* background-color: red; */
`;

const SearchHolder = styled.div`
  width: 300px;
  background-color: lightgray;
  height: 35px;
  display: flex;
  border-radius: 0px 5px 5px 0px;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.input`
  width: 250px;
  height: 86%;
  flex: 1;
  padding: 0px 10px;
  outline: none;
  transition: all 350ms;

  :hover{
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin: 10px;
  font-size: 20px;
`;


const Icon = styled(BsThreeDotsVertical)`
  margin-top: 3px;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  transition: all 500ms;
  :hover {
    background-color: #c0c0c09b;
  }
`;
const Items = styled.div`
  margin: 0px 20px;
  font-weight: 700;
  transition: all 500ms;
  text-transform: uppercase;
  color: #373737;

  :hover {
    cursor: pointer;
    color: purple;
    transform: scale(1.23);
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  width: 97%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
`;

