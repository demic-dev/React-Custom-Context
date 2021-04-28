import React, { useState } from "react";
import styled from "styled-components";

import { useUser } from "../index.d";

function loginTheUser() {
  return new Promise<string>((resolve, reject) =>
    setTimeout(() => {
      // do stuff, such as API calls, ecc...
      resolve("thisIsTheID!");
    }, 1000)
  );
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserContext = useUser();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginTheUser().then((id) =>
      handleUserContext!.dispatch({ type: "setUser", payload: { id: id } })
    );
  };

  return (
    <Wrapper>
      <Content>
        <h1>Welcome back!</h1>
        <FormContainer onSubmit={handleLogin}>
          <div>
            <InputStatement
              id="user"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <InputStatement
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <LoginButton type="submit">Sign In</LoginButton>
        </FormContainer>
      </Content>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 27%;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid gainsboro;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.15);

  padding: 7rem 0;

  * {
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 1rem;

  justify-items: center;
`;

const FormContainer = styled.form`
  display: grid;

  gap: 1.4rem;
`;

const InputStatement = styled.input`
  padding: 1rem 0.8rem;

  border: 1px solid #262626;
  border-radius: 8px;
`;

const LoginButton = styled.button`
  border: none;

  padding: 1rem;
  width: 100%;

  border-radius: 8px;
  background-color: #1f4b99;
  color: #fff;

  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;

  transition: 0.4s ease-in;
  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
`;
