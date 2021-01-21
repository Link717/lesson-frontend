import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUserId } from "../store/modules/UpdateUserId";
import { setPassword } from "../store/modules/UpdatePassword";

function Input({ name }) {
  const { label, type } = name;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValue(value);

    switch (name) {
      case "이메일":
        return dispatch(setUserId(value));
      case "비밀번호":
        return dispatch(setPassword(value));
      default:
    }
  };

  return (
    <InputContainer>
      <label html={label}>{label}</label>
      <input
        type={type}
        name={label}
        value={value}
        onChange={handleInputValue}
      />
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  ${({ theme }) => theme.flex("flex-start", null, "column")};

  label {
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: bold;
  }

  input {
    margin-bottom: 16px;
    border: 1px solid ${({ theme }) => theme.deepGrey};
    border-radius: 4px;
    font-size: 14px;
    line-height: 2.5;
    text-indent: 4px;
    outline: none;

    :focus {
      border: 1px solid ${({ theme }) => theme.mainBlue};
    }
  }
`;
