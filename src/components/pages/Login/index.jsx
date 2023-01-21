import React, { useState } from "react";
import styled from "styled-components";
import { EyeIcon, Flex, Input, Text } from "../../atoms";
import { baniColors } from "../../../theme/colors";
import logoFile from "../../../assets/images/svg/logo.svg";
import { screen, typeScale } from "../../../theme";
import { Link } from "react-router-dom";

const Wrapper = styled(Flex)`
  align-items: center;
  flex-direction: column;
  background-color: ${baniColors.background};
  height: 100vh;
`;

const Logo = styled.img`
  margin: 20px 0;
  width: 80px;
  height: 50px;
`;

const FormWrapper = styled.div`
  background-color: ${baniColors.white};
  border-radius: 8px;
  padding: 20px 20px 30px 20px;
  width: 25%;

  @media only screen and (${screen.md}) {
    width: 50%;
  }

  @media only screen and (${screen.sm}) {
    width: 90%;
  }
`;

const Label = styled.label`
  display: block;
  color: #65717c;
`;

const SubmitBtn = styled(Link)`
  display: flex;
  background-color: ${baniColors.blue};
  align-items: center;
  justify-content: center;
  color: ${baniColors.white};
  width: 100%;
  border: 0;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
`;
const RevealIcon = styled(EyeIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const Login = () => {
  const [revealPassword, setRevealedPassword] = useState(false);

  return (
    <Wrapper>
      <Logo src={logoFile} alt="logo" />
      <FormWrapper>
        <Text type="h2" lineHeight="35px" fontWeight="600" margin="0">
          Log in to your account
        </Text>
        <Flex>
          <Text type="p" padding="0 10px 0 0">
            Don’t have an account?
          </Text>
          <Text type="p" color={baniColors.blue}>
            Get Started
          </Text>
        </Flex>

        <Label>
          <Text type="p" margin="5px 0" fontSize={typeScale.label}>
            Email
          </Text>
          <Input type="email" />
        </Label>

        <div style={{ margin: "16px 0" }}>
          <Flex justifyContent="space-between" color="#65717c" width="100%">
            <label>
              <Text type="p" margin="5px 0" fontSize={typeScale.label}>
                Password
              </Text>
            </label>

            <Text
              type="p"
              margin="5px 0"
              fontSize={typeScale.label}
              color={baniColors.blue}
            >
              Forgot Password
            </Text>
          </Flex>
          <Flex position="relative">
            <RevealIcon onClick={() => setRevealedPassword(!revealPassword)} />
            <Input type={revealPassword ? "text" : "password"} />
          </Flex>
        </div>

        <SubmitBtn to="/dashboard">
          <Text>Login</Text>
        </SubmitBtn>
      </FormWrapper>
    </Wrapper>
  );
};
