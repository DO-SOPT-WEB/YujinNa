import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { St } from "../styles/Design";
import img from "../assets/5.jpg";
const Mypage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [nickname, setNickName] = useState("");
  useEffect(() => {
    userId !== "" && getUserInfo();
  }, [userId]);
  const getUserInfo = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/v1/members/${userId}`)
        .then((response) => {
          setUserName(response.data.username);
          setNickName(response.data.nickname);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const onLogoutBtnClick = () => {
    navigate("/login");
  };
  return (
    <St.ModalContainer>
      <St.ModalBox>
        <St.ModalTitle>MY PAGE</St.ModalTitle>
        <St.UserInfoContainer>
          <St.UserProfile src={img} alt="profile" />
          <St.UserInfoBox>
            <St.UserInfo>ID : {username}</St.UserInfo>
            <St.UserInfo>닉네임 : {nickname}</St.UserInfo>
          </St.UserInfoBox>
        </St.UserInfoContainer>
        <St.ButtonContainer>
          <St.SubmitButton type="button" onClick={onLogoutBtnClick}>
            로그아웃
          </St.SubmitButton>
        </St.ButtonContainer>
      </St.ModalBox>
    </St.ModalContainer>
  );
};

export default Mypage;
