import styled,{keyframes} from "styled-components";


export const MainBox=styled.div`
  position: absolute;
  top: 10rem;
  height: 20rem;
  margin: 3rem;
  padding: 1rem;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;

export const LevelBox=styled.div`
  position: absolute;
  top:5rem;
  right: 5rem;
  font-weight: 500;
  font-size: 1.5rem;
`

export const ResultBox=styled(MainBox)`
  flex-direction: column;
`
export const ResultContry=styled.div`
  font-size: 3rem;
  margin-top: 1rem;
  padding: 0.3rem 0.7rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.hotPink};
`

export const TypeofRecommand=styled.div`
  width: 50rem;
  height: inherit;
  background-color: ${({ theme }) => theme.colors.lightRed};
  border: ${({theme}) => `solid 0.3rem ${theme.colors.lightRed}`};
  &:hover{
    border: ${({selected}) => !selected && 'solid 0.3rem gray'
  }}
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

export const AnswerBox = styled(TypeofRecommand)`
  height:7rem;
  &:hover{
    border: solid 0.1rem gray;
  }
  background-color: ${({btncolor}) => btncolor?'gray':'white'};
  border: ${({btncolor}) => btncolor?'solid 0.3rem gray':'solid 0.3rem white'};
  &:focus{
    background-color:${({ theme }) => theme.colors.gray};
    border: solid 1rem ${({ theme }) => theme.colors.gray};
  }

`

export const BtnBox=styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 20rem;
  top: 43rem;
`;

export const Btn=styled.button`
  background-color:${({ theme }) => theme.colors.skyBlue};
  border: solid 0.1rem ${({ theme }) => theme.colors.skyBlue};
  border-radius: 1rem;
  font-size: 2rem;
  padding: 0.3rem 1rem;
  &:enabled&:hover{
    border: solid 0.1rem ${({ theme }) => theme.colors.gray};
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
  top: 2rem;
  font-size: 2rem;

`
export const ResutlImg=styled.img`
  max-width:30rem;
  max-height: 30rem;
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
  padding:2rem 3.5rem;
  font-size:5rem;
`;

