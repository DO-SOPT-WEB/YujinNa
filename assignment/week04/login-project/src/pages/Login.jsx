import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onIdChange = (e) => {
    setId(e.target.value.toString());
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value.toString());
  };
  const onRegisterBtnClick = () => {
    navigate("/signup");
  };
  const onLoginBtnClick = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`, {
          username: id,
          password: password,
        })
        .then((res) => {
          navigate(`/mypage/${res.data.id}`, {
            state: {
              id: res.data.id,
            },
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <St.LoginContainer>
      <St.LoginBox>
        <St.LoginTitle>Login</St.LoginTitle>
        <St.InputContainer>
          <St.InputCategory>ID</St.InputCategory>
          <St.InputBox
            required
            placeholder="아이디를 입력해주세요"
            onChange={onIdChange}
          ></St.InputBox>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>PASSWORD</St.InputCategory>
          <St.InputBox
            placeholder="비밀번호를 입력해주세요"
            required
            onChange={onPasswordChange}
          ></St.InputBox>
        </St.InputContainer>
        <St.ButtonContainer>
          <St.SubmitButton onClick={onLoginBtnClick}>로그인</St.SubmitButton>
          <St.RegisterButton onClick={onRegisterBtnClick}>
            회원가입
          </St.RegisterButton>
        </St.ButtonContainer>
      </St.LoginBox>
    </St.LoginContainer>
  );
};

export default Login;

const St = {
  LoginContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  `,
  LoginBox: styled.div`
    padding: 3rem;
    position: relative;
    width: 50rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    font-size: 5rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  LoginTitle: styled.div`
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.5rem auto;
  `,
  InputCategory: styled.div`
    width: 10rem;
  `,
  InputBox: styled.input`
    width: 30rem;
    padding: 1rem;
  `,
  ButtonContainer: styled.div`
    width: 40rem;
    margin: 1.5rem auto;
    display: flex;
    flex-direction: column;
  `,
  SubmitButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  `,
  RegisterButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  `,
};
