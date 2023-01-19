import React from "react";
import { DashboardTemplate } from "../../templates";
import { Navbar, SideNav } from "../../molecules";
import styled from "styled-components";
import { Flex, Input, Text } from "../../atoms";
import { Link } from "react-router-dom";
import { baniColors, orange } from "../../../theme/colors";
import { typeScale } from "../../../theme";
import { Table } from "../../organisms/Table";
import { virtualAccounts } from "../../../utils/db";

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
`;
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
  border: ${({ border }) => `1px solid ${border}`};
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
  padding: ${({ padding }) => padding || "16px 24px"};
  display: flex;
  align-items: center;
  border-top: ${({ borderTop }) => `1px solid ${borderTop}`};
  border-bottom: ${({ borderBottom }) => `1px solid ${borderBottom}`};
`;
const VirtualAccountsList = styled.section`
  background-color: ${baniColors.white};
  height: 83%;
  border-radius: 8px;
`;
const ActivityFeedSection = styled.section`
  background-color: ${baniColors.white};
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
          <VirtualAccountSummary>
            <div style={{ marginRight: "80px" }}>
              <Text
                type="p"
                fontSize={typeScale.helperText}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
              >
                Total Credits
              </Text>
              <Text type="h3" fontWeight="600" margin="0">
                NGN 3,287,902.00
              </Text>
            </div>

            <div style={{ marginRight: "80px" }}>
              <Text
                type="p"
                fontSize={typeScale.helperText}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
              >
                Total Transfer Settlememts
              </Text>
              <Text type="h3" fontWeight="600" margin="0">
                81 Settlement
              </Text>
            </div>

            <div style={{ marginRight: "80px" }}>
              <Text
                type="p"
                fontSize={typeScale.helperText}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
              >
                Generated Accounts
              </Text>
              <Text type="h3" fontWeight="600" margin="0">
                12 Accounts
              </Text>
            </div>
          </VirtualAccountSummary>
          <VirtualAccountsList>
            <Flex justifyContent="space-between" padding="16px 24px">
              <Text type="p" fontWeight="600" margin="0">
                Your Virtual Accounts
              </Text>

              <Flex>
                <div style={{ marginRight: "16px" }}>Icon 1</div>
                <div>Icon 2</div>
              </Flex>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              padding="12px 24px"
              borderTop={`1px solid ${baniColors.border[50]}`}
              borderBottom={`1px solid ${baniColors.border[50]}`}
            >
              <Flex
                backgroundColor={baniColors.background}
                color={baniColors.blue}
                borderRadius="50px"
                padding="8px 10px"
              >
                <Text fontSize={typeScale.helperText}>Branch</Text>
              </Flex>

              <Flex width="50%">
                <Input
                  placeholder="Search for virtual accounts"
                  type="search"
                />
              </Flex>
            </Flex>

            <Flex
              justifyContent="space-between"
              padding="16px 24px"
              margin="12px 0 0 0"
            >
              <Text type="p" fontWeight="600" margin="0">
                Lekki II
              </Text>

              <Flex>
                <div style={{ marginRight: "8px" }}>Manage</div>
                <div>Icon</div>
              </Flex>
            </Flex>

            <section>
              <Table
                columnTitles={[
                  "Bank Name",
                  "Account Number",
                  "",
                  "Total Inflow",
                  "",
                ]}
                data={virtualAccounts.map((item) => {
                  return (
                    <tr>
                      <td>
                        <Flex alignItems="center">
                          <Image src={item.bankLogo} alt={item.bankName} />{" "}
                          {item.bankName}
                        </Flex>
                      </td>
                      <td>{item.accountNumber} Icon</td>
                      <td>{item.linkedBranch}</td>
                      <td>{item.totalInflow}</td>
                      <td>.</td>
                    </tr>
                  );
                })}
              />
            </section>
          </VirtualAccountsList>
        </VirtualAccountListSection>

        <ActivityFeedSection>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            padding="16px 24px"
          >
            <Flex alignItems="center">
              <Text fontWeight="600" margin="0" fontSize={typeScale.paragraph}>
                Activity Feed -
              </Text>
              <Text margin="0" fontSize={typeScale.paragraph}>
                GT Bank
              </Text>
            </Flex>

            <Flex alignItems="center">
              <Text margin="0" fontSize={typeScale.helperText}>
                Active -
              </Text>
              <Text margin="0" fontSize={typeScale.helperText}>
                Created 16 days ago
              </Text>
            </Flex>
          </Flex>

          <Flex backgroundColor={orange[100]} margin="0 0 20px 0">
            <Image
              style={{ position: "relative", top: "20px", left: "24px" }}
              src={virtualAccounts[0].bankLogo}
              alt={virtualAccounts[0].bankName}
            />
          </Flex>

          <Flex
            padding="12px 24px"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Text type="p" fontWeight="600" margin="0">
                Guaranty Trust Bank
              </Text>
              <Text type="p" margin="6px 0">
                209630**83
              </Text>
            </div>
            <Flex>
              <SecondaryMenuLink
                color={baniColors.lightGrey}
                border={baniColors.border[50]}
              >
                Create New Branch
              </SecondaryMenuLink>
            </Flex>
          </Flex>

          <VirtualAccountSummary
            padding="8px 24px"
            borderTop={baniColors.border[50]}
            borderBottom={baniColors.border[50]}
          >
            <div style={{ marginRight: "30px" }}>
              <Text
                type="p"
                fontSize={typeScale.small}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
              >
                Total Inflow
              </Text>
              <Text
                type="p"
                fontWeight="600"
                margin="0"
                fontSize={typeScale.helperText}
              >
                ₦77,823.00
              </Text>
            </div>

            <div style={{ marginRight: "30px" }}>
              <Text
                type="p"
                fontSize={typeScale.small}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
              >
                Last Activity Date
              </Text>
              <Text
                type="p"
                fontWeight="600"
                margin="0"
                fontSize={typeScale.helperText}
              >
                13th Sept. 2022
              </Text>
            </div>

            <div style={{ marginRight: "30px" }}>
              <Text
                type="p"
                fontSize={typeScale.small}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
              >
                Linked Branch
              </Text>
              <Text
                type="p"
                fontWeight="600"
                margin="0"
                fontSize={typeScale.helperText}
              >
                Dodo - Lekki II
              </Text>
            </div>
          </VirtualAccountSummary>

          <section style={{ overflowX: "auto" }}>
            <Table
              padding="10px 16px"
              small={true}
              columnTitles={["Transaction Details", "Amount", "Date", ""]}
              data={virtualAccounts[0].transactions.map((item) => {
                return (
                  <tr>
                    <td>{item.transactionDetails}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td>.</td>
                  </tr>
                );
              })}
            />
          </section>
        </ActivityFeedSection>
      </BodySection>
    </DashboardTemplate>
  );
};
