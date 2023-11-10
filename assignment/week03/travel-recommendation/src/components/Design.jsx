import styled,{keyframes} from "styled-components";

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

export const LevelBox=styled.div`
  position: absolute;
  top:5rem;
  right: 5rem;
  font-weight: 500;
  font-size: 0.8rem;
`

export const ResultBox=styled(MainBox)`
  flex-direction: column;
`
export const ResultContry=styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 0.3rem 0.7rem;
  border-radius: 1rem;
  background-color: #df4b8e;
`

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
    border: solid 0.1rem gray;
  }
  background-color: ${({btncolor}) => btncolor?'gray':'white'};
  border: ${({btncolor}) => btncolor?'solid 0.1rem gray':'solid 0.1rem white'};
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
  border: solid 0.1rem skyblue;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  &:enabled&:hover{
    border: solid 0.1rem gray;
  }
`;

export const GotoHomeBtn=styled(Btn)`
  position: absolute;
  right: 1rem;
`

export const Description=styled.div`
  background-color:ivory;
  padding: 0.5rem 1.5rem;
  position: absolute;
  top: 1rem;

`
export const ResutlImg=styled.img`
  width:11em;

`
const rotation=keyframes`
  from{
    transform: rotate(0deg);
    color: red;
    background-color: skyblue;
  }

  to{
    transform: rotate(360deg);
    color: green;
    background-color: yellow;
  }

`;

export const CountDown=styled.div`
  animation:${rotation} 1s linear infinite;
  border-radius:5rem;
  padding:1rem 1.5rem;
  font-size:1.5rem;
`;

