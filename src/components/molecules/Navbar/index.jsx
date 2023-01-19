import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../../atoms";
import logoFile from "../../../assets/images/svg/logo.svg";

const Wrapper = styled.nav`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  height: 40px;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Logo src={logoFile} alt="logo" />
      <Flex>
        <Text>Icon</Text>
        <Text>Dropdown</Text>
      </Flex>
    </Wrapper>
  );
};
