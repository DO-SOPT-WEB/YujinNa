import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { St } from "../styles/Modal";

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
          navigate(`/mypage/${res.data.id}`);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <St.ModalContainer>
      <St.ModalBox>
        <St.ModalTitle>Login</St.ModalTitle>
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
          <Link to={"/signup"}>
            <St.RegisterButton>회원가입</St.RegisterButton>
          </Link>
          {/* <St.RegisterButton onClick={onRegisterBtnClick}>
            회원가입
          </St.RegisterButton> */}
        </St.ButtonContainer>
      </St.ModalBox>
    </St.ModalContainer>
  );
};

export default Login;
