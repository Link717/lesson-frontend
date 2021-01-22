import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LoginAPI } from "../Config/urls";

function Button({ name }) {
  const id = useSelector((store) => store.setUserIdReducer);
  const pw = useSelector((store) => store.setPasswordReducer);

  const handleLogin = async () => {
    try {
      const response = await fetch(LoginAPI, {
        method: "POST",
        body: JSON.stringify({
          id,
          pw,
        }),
      });
      const data = await response.json();

      if (data.access_token) {
        return alert("로그인에 성공하였습니다.");
      } else if (data.message.includes("이메일")) {
        return alert("이메일을 확인해주세요.");
      } else if (data.message.includes("비밀번호")) {
        return alert("비밀번호를 확인해주세요.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <LoginButton onClick={handleLogin}>{name}</LoginButton>;
}

export default Button;

const LoginButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBlue};
  border: 1px solid ${({ theme }) => theme.deepGrey};
  border-radius: 4px;
  color: white;
  font-weight: bold;
  line-height: 2.5;
  text-align: center;
`;
