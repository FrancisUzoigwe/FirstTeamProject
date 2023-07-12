import React from "react";
import styled from "styled-components";
import pic from "../Assets/pic.jpg"
const LandingPage = () => {
  return (
    <Container>
      <Container1>
        <Holder>
          <SubHolder>
            <Text>
              <Big>Ready to Expand your cooking skills</Big>
              <Small>Even if you think you are hopeless in the kitchen; like everything else, practice <br />and 
              increasing knowledge makes perfecr. Search for receipes here and in books <br />
              read them and become a great chef of all time.</Small>
              <Button>Start</Button>
            </Text>
            <Image src={pic}/>
          </SubHolder>
        </Holder>

        <TrendHolder>
          <Trend>Trending Receipe
            <ButtonHold>
              <Button1>Salad</Button1>
              <Button1>Soup</Button1>
              <Button1>Deserts</Button1>
              <Button1>Vegetable</Button1>
            </ButtonHold>
          </Trend>
        </TrendHolder>
      </Container1>
    </Container>
  );
};

export default LandingPage;

const Button1 = styled.button`
width: 100px;
height: 30px;
border-radius: 5px;
border: none;
transition: all 450ms;
font-weight: 600;
margin: 0 10px;
background-color: grey;

:hover{
  cursor: pointer;
  transform: scale(1.1);
  background-color: #9556F4;
}

`;

const ButtonHold = styled.div`
margin: 0 10px;
`;

const Trend = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
font-weight: 700;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
margin: 0 10px;
`;

const TrendHolder = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Button = styled.button`
width: 100px;
height: 30px;
border-radius: 5px;
border: none;
transition: all 450ms;
font-weight: 600;
background-color: grey;


:hover{
  cursor: pointer;
  transform: scale(1.1);
  background-color: #9556F4;
}


`;
const Small = styled.div`
/* text-align: center; */
font-weight: 500;
font-size: 18px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Big = styled.div`
font-weight: 800;
font-size: 30px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-align: center;
`;

const Image = styled.img`
width: 300px;
height: 300px;
background-color: purple;
object-fit: cover;
border-radius: 10px;
`;
const Text = styled.div`
height: 250px;
width: 700px;
display: flex;
justify-content: space-evenly;
align-items: center;
border: 1px solid black;
border-radius: 10px 0px 0px 10px ;
flex-direction: column;
`;

const SubHolder = styled.div`
  width: 95%;
  height: 600px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #EFF1F5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EFF1F5;
  margin-left: 40px;
`;
const Container = styled.div`
  /* height: calc(100vh - 120px); */
  height: 200vh;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  display: flex;
`;
