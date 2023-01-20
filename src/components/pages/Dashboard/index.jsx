import React from "react";
import { DashboardTemplate } from "../../templates";
import { Navbar, SideNav } from "../../molecules";
import styled from "styled-components";
import {
  AddIcon,
  ArrowDownT1Icon,
  ArrowRightIcon,
  CopyIcon,
  Flex,
  FormatSquareIcon,
  Input,
  MoreIcon,
  OverviewIcon,
  RowVerticalIcon,
  SettingsT2Icon,
  Text,
} from "../../atoms";
import { Link } from "react-router-dom";
import { baniColors, orange } from "../../../theme/colors";
import { screen, typeScale } from "../../../theme";
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
  overflow-x: auto;

  @media only screen and (${screen.sm}) {
    width: 100%;
    padding: 30px;

    & h3 {
      margin-right: 30px;
    }
  }
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
  white-space: nowrap;
  display: flex;
  align-items: center;
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

  @media only screen and (${screen.sm}) {
    display: block;
    padding: 8px;
  }
`;
const VirtualAccountListSection = styled.section`
  background-color: transparent;
  width: 69%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (${screen.sm}) {
    width: 100%;
    margin-bottom: 50px;
  }
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
  overflow-x: auto;

  @media only screen and (${screen.sm}) {
    margin-bottom: 20px;
  }
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

  @media only screen and (${screen.sm}) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const Dashboard = () => {
  return (
    <DashboardTemplate header={<Navbar />} sidebar={<SideNav />}>
      <SecondaryMenuSection>
        <Text
          whitespace="nowrap"
          type="h3"
          lineHeight="35px"
          fontWeight="600"
          margin="0"
        >
          Virtual Account Dashboard
        </Text>

        <SecondaryMenuLinkWrapper>
          <SecondaryMenuLink color={baniColors.lightGrey}>
            <FormatSquareIcon />{" "}
            <Text margin="0 0 0 10px">Create New Branch</Text>
          </SecondaryMenuLink>
          <SecondaryMenuLink
            backgroundColor={baniColors.blue}
            color={baniColors.white}
          >
            <AddIcon />
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
                whitespace="nowrap"
              >
                Total Credits
              </Text>
              <Text type="h3" fontWeight="600" margin="0" whitespace="nowrap">
                NGN 3,287,902.00
              </Text>
            </div>

            <div style={{ marginRight: "80px" }}>
              <Text
                type="p"
                fontSize={typeScale.helperText}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
                whitespace="nowrap"
              >
                Total Transfer Settlememts
              </Text>
              <Text type="h3" fontWeight="600" margin="0" whitespace="nowrap">
                81 Settlement
              </Text>
            </div>

            <div style={{ marginRight: "80px" }}>
              <Text
                type="p"
                fontSize={typeScale.helperText}
                color={baniColors.lightGrey}
                margin="0 0 6px 0"
                whitespace="nowrap"
              >
                Generated Accounts
              </Text>
              <Text type="h3" fontWeight="600" margin="0" whitespace="nowrap">
                12 Accounts
              </Text>
            </div>
          </VirtualAccountSummary>
          <VirtualAccountsList>
            <Flex justifyContent="space-between" padding="16px 24px">
              <Text type="p" fontWeight="600" margin="0">
                Your Virtual Accounts
              </Text>

              <Flex alignItems="center">
                <div style={{ marginRight: "16px" }}>
                  <OverviewIcon />
                </div>
                <div>
                  <RowVerticalIcon />
                </div>
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
                <SettingsT2Icon />
              </Flex>
            </Flex>

            <section style={{ overflowX: "auto" }}>
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
                      <td>
                        <Flex alignItems="center">
                          <Text margin="0 10px 0 0">{item.accountNumber}</Text>{" "}
                          <CopyIcon />
                        </Flex>
                      </td>
                      <td>
                        <Flex alignItems="center">
                          <FormatSquareIcon />
                          <Text margin="0 0 0 10px" fontSize={typeScale.small}>
                            Dodo - {item.linkedBranch}
                          </Text>{" "}
                        </Flex>
                      </td>
                      <td>{item.totalInflow}</td>
                      <td>
                        <MoreIcon />
                      </td>
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
              <Text
                fontWeight="600"
                margin="0"
                fontSize={typeScale.paragraph}
                whitespace="nowrap"
              >
                Activity Feed -
              </Text>
              <Text
                margin="0"
                fontSize={typeScale.paragraph}
                whitespace="nowrap"
              >
                {"  "}
                GT Bank
              </Text>
            </Flex>

            <Flex alignItems="center">
              <Text
                margin="0"
                fontSize={typeScale.helperText}
                whitespace="nowrap"
              >
                Active - Created 16 days ago
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
                <Text margin="0 10px 0 0">Go to Account View</Text>
                <ArrowDownT1Icon />
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
                whitespace="nowrap"
              >
                Total Inflow
              </Text>
              <Text
                type="p"
                fontWeight="600"
                margin="0"
                fontSize={typeScale.helperText}
                whitespace="nowrap"
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
                whitespace="nowrap"
              >
                Last Activity Date
              </Text>
              <Text
                type="p"
                fontWeight="600"
                margin="0"
                fontSize={typeScale.helperText}
                whitespace="nowrap"
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
                whitespace="nowrap"
              >
                Linked Branch
              </Text>
              <Flex>
                <FormatSquareIcon />
                <Text
                  type="p"
                  fontWeight="600"
                  margin="0 0 0 10px"
                  fontSize={typeScale.small}
                  whitespace="nowrap"
                >
                  Dodo - Lekki II
                </Text>
              </Flex>
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
                    <td>
                      <ArrowRightIcon />
                    </td>
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
