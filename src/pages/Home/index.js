import React from 'react';

import { Container, Header, HeaderText, InputContainer, Input, Button, StyledIcon } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <HeaderText>Home</HeaderText>
      </Header>
      <InputContainer>
        <Input placeholder="Search ..."></Input>
        <Button><StyledIcon name="search" size={20} color="#fff" /></Button>
      </InputContainer>
    </Container>
  );
}
