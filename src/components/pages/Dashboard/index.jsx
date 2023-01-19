import React from "react";
import { DashboardTemplate } from "../../templates";
import { Navbar, SideNav } from "../../molecules";
import styled from "styled-components";
import { Flex, Text } from "../../atoms";
import { Link } from "react-router-dom";
import { baniColors } from "../../../theme/colors";

const SecondaryMenuSection = styled.section`
  height: 10%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SecondaryMenuLink = styled(Link)`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || baniColors.white};
  padding: 10px 16px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  color: ${({ color }) => color};
`;
const SecondaryMenuLinkWrapper = styled(Flex)`
  & a:not(:last-child) {
    margin-right: 16px;
  }
`;
const BodySection = styled.section`
  display: flex;
  height: 90%;
  padding: 0 24px 16px 24px;
  background: transparent;
  justify-content: space-between;
`;
const VirtualAccountListSection = styled.section`
  background-color: transparent;
  width: 69%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const VirtualAccountSummary = styled.section`
  background-color: ${baniColors.white};
  height: 15%;
  border-radius: 8px;
  padding: 16px 24px;
`;
const VirtualAccountsList = styled.section`
  background-color: ${baniColors.white};
  height: 83%;
  border-radius: 8px;
`;
const ActivityFeedSection = styled.section`
  background-color: ${baniColors.white};
  padding: 16px 24px;
  width: 30%;
  height: 100%;
  border-radius: 8px;
`;

export const Dashboard = () => {
  return (
    <DashboardTemplate header={<Navbar />} sidebar={<SideNav />}>
      <SecondaryMenuSection>
        <Text type="h3" lineHeight="35px" fontWeight="600" margin="0">
          Virtual Account Dashboard
        </Text>

        <SecondaryMenuLinkWrapper>
          <SecondaryMenuLink color={baniColors.lightGrey}>
            Create New Branch
          </SecondaryMenuLink>
          <SecondaryMenuLink
            backgroundColor={baniColors.blue}
            color={baniColors.white}
          >
            Create Virtual Account
          </SecondaryMenuLink>
        </SecondaryMenuLinkWrapper>
      </SecondaryMenuSection>

      <BodySection>
        <VirtualAccountListSection>
          <VirtualAccountSummary>Summary</VirtualAccountSummary>
          <VirtualAccountsList>Table</VirtualAccountsList>
        </VirtualAccountListSection>
        <ActivityFeedSection>Activity</ActivityFeedSection>
      </BodySection>
    </DashboardTemplate>
  );
};
