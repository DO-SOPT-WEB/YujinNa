import styled,{css} from "styled-components";

export const MainBox=styled.div`
position: absolute;
top: 2rem;
/* background-color: white; */
height: 20rem;
margin: 3rem;
padding: 1rem;
width: 60vw;
display: flex;
justify-content: center;
align-items: center;
`;

export const TypeofRecommand=styled.div`
  width: 40em;
  height: inherit;
  background-color: #ffe0e0;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

export const AnswerBox = styled(TypeofRecommand)`
    /* background-color: white; */
    height:7em;
    &:hover{
      border: solid 1px gray;
    }
    background-color: ${({btncolor}) => btncolor?'gray':'white'};
    border: ${({btncolor}) => btncolor&&'solid 1px gray'};
    &:focus{
      background-color: gray;
      border: solid 1px gray;
    }

`

export const BtnBox=styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 15em;
  /* background-color: white; */
  top: 30rem;
`;

export const Btn=styled.button`
  background-color: skyblue;
  border: none;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
`;

export const Description=styled.div`
background-color:ivory;
padding: 0.5rem 1.5rem;
position: absolute;
top: 1rem;

`