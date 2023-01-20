import React, { useState } from "react";
import styled from "styled-components";
import { ArrowDownT2Icon, Flex, NotificationIcon, Text } from "../../atoms";
import logoFile from "../../../assets/images/svg/logo.svg";
import { baniColors } from "../../../theme/colors";
import { typeScale } from "../../../theme";

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
const Profile = styled.div`
  background-color: ${baniColors.blue};
  width: 30px;
  height: 30px;
  color: ${baniColors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: ${typeScale.small};
  font-weight: 600;
`;
const NotificationWrapper = styled.div`
  position: relative;
  background-color: ${baniColors.background};
  width: 30px;
  height: 30px;
  color: ${baniColors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
`;
const NotificationSignal = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${baniColors.blue};
  top: 8px;
  left: 15px;
`;

export const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [newNotification, setNewNotification] = useState(true);

  return (
    <Wrapper>
      <Logo src={logoFile} alt="logo" />
      <Flex alignItems="center">
        <NotificationWrapper tabIndex="0">
          {newNotification && <NotificationSignal />}
          <NotificationIcon />
        </NotificationWrapper>
        <Flex
          backgroundColor={baniColors.background}
          borderRadius="10px"
          padding="4px 8px"
          alignItems="center"
          cursor="pointer"
          tabIndex="0"
        >
          <Profile>JT</Profile>
          <div style={{ marginRight: "10px" }}>
            <Text
              type="p"
              fontWeight="600"
              margin="0"
              fontSize={typeScale.small}
              whitespace="nowrap"
            >
              JT Industry Limit..
            </Text>
            <Text
              type="p"
              fontSize={typeScale.smaller}
              color={baniColors.lightGrey}
              margin="0"
            >
              JamesT@gmail.com
            </Text>
          </div>
          <ArrowDownT2Icon />
        </Flex>
      </Flex>
    </Wrapper>
  );
};
