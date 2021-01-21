import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const INPUT_NAMES = [
  {
    label: "이메일",
    type: "text",
  },
  {
    label: "비밀번호",
    type: "text",
  },
];

function SignIn() {
  return (
    <SignInContainer>
      <h2>학생 로그인</h2>
      <form action="">
        {INPUT_NAMES.map((name, idx) => (
          <Input key={idx} name={name} />
        ))}
      </form>
      <Button name="로그인" />
      <BottonInfo>
        <span>수파자 계정이 없으신가요?</span>
        <button>회원가입</button>
      </BottonInfo>
    </SignInContainer>
  );
}

export default SignIn;

const SignInContainer = styled.div`
  ${({ theme }) => theme.container};

  h2 {
    margin-bottom: 30px;
    text-align: center;
  }
`;

const BottonInfo = styled.div`
  ${({ theme }) => theme.flex("center", null, null)};
  margin-top: 20px;

  span {
    font-size: 13px;
  }

  button {
    margin-left: 10px;
    color: ${({ theme }) => theme.mainBlue};
    font-size: 14px;
    font-weight: bold;
  }
`;
