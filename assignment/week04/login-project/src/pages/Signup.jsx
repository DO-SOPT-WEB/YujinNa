import React, { useEffect, useState } from "react";
import { St } from "../styles/Design";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [isExist, setIsExist] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  useEffect(() => {
    if (
      isExist === false &&
      !Object.values(userInfo).some((each) => each === "")
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isExist, userInfo]);

  const onInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value.toString() });
  };

  const onDuplicatedClick = () => {
    try {
      axios
        .get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/members/check?username=${
            userInfo.id
          }`
        )
        .then((res) => {
          setIsExist(res.data.isExist);
          console.log(res.data.isExist);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const onRegisterBtnClick = () => {
    !disabled && submitRegister();
  };
  const submitRegister = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/api/v1/members`, {
          username: userInfo.id,
          password: userInfo.password,
          nickname: userInfo.nickname,
        })
        .then(() => {
          navigate("/login");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <St.ModalContainer>
      <St.ModalBox bigger={true}>
        <St.ModalTitle>Sign Up</St.ModalTitle>
        <St.InputContainer>
          <St.InputCategory>ID</St.InputCategory>
          <St.InputBox
            required
            name="id"
            placeholder="아이디를 입력해주세요"
            onChange={onInfoChange}
            shorter={true}
          ></St.InputBox>
          <St.DuplicateCheckBtn
            type="button"
            onClick={onDuplicatedClick}
            isExist={isExist}
          >
            중복체크
          </St.DuplicateCheckBtn>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>비밀번호</St.InputCategory>
          <St.InputBox
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onInfoChange}
            value={userInfo.password}
            required
          ></St.InputBox>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>비밀번호 확인</St.InputCategory>
          <St.InputBox
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            // value={userInfo.password}
            // onChange={onInfoChange}
            required
          ></St.InputBox>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>닉네임</St.InputCategory>
          <St.InputBox
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            value={userInfo.nickname}
            onChange={onInfoChange}
            required
          ></St.InputBox>
        </St.InputContainer>
        <St.ButtonContainer>
          {disabled ? (
            <St.SubmitButton type="button" disabled isdisabled={disabled}>
              회원가입
            </St.SubmitButton>
          ) : (
            <St.SubmitButton type="button" onClick={onRegisterBtnClick}>
              회원가입
            </St.SubmitButton>
          )}
        </St.ButtonContainer>
      </St.ModalBox>
    </St.ModalContainer>
  );
};

export default Signup;
