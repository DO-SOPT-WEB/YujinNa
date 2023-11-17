import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mypage = () => {
  const { userId } = useParams();
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
          console.log(response);
          setUserName(response.data.username);
          setNickName(response.data.nickname);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>{username}</div>
      <div>{nickname}</div>
    </div>
  );
};

export default Mypage;
