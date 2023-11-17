import React from "react";
import { St } from "../styles/Modal";

const Signup = () => {
  return (
    <St.ModalContainer>
      <St.ModalBox bigger={true}>
        <St.ModalTitle>Sign Up</St.ModalTitle>
        <St.InputContainer>
          <St.InputCategory>ID</St.InputCategory>
          <St.InputBox
            required
            placeholder="아이디를 입력해주세요"
            shorter={true}
          ></St.InputBox>
          <St.DuplicateCheckBtn>중복체크</St.DuplicateCheckBtn>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>비밀번호</St.InputCategory>
          <St.InputBox
            placeholder="비밀번호를 입력해주세요"
            required
          ></St.InputBox>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>비밀번호 확인</St.InputCategory>
          <St.InputBox
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            required
          ></St.InputBox>
        </St.InputContainer>
        <St.InputContainer>
          <St.InputCategory>닉네임</St.InputCategory>
          <St.InputBox
            placeholder="닉네임을 입력해주세요"
            required
          ></St.InputBox>
        </St.InputContainer>
        <St.ButtonContainer>
          <St.SubmitButton>회원가입</St.SubmitButton>
        </St.ButtonContainer>
      </St.ModalBox>
    </St.ModalContainer>
  );
};

export default Signup;
