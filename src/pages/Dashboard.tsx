import React from "react";
import styled from "styled-components";

import { useUser, Login } from "../index.d";

const Dashboard: React.FC = () => {
  const userContext = useUser();

  if (!userContext!.state.id) return <Login />;

  return (
    <Wrapper>
      <Heading>Dashboard</Heading>

      <p>
        User logged with <em>id</em>: <strong>{userContext!.state.id}</strong>
      </p>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: orange;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`
const Heading = styled.h2`
  font-size: 1.4rem;

  font-weight: bold;
`