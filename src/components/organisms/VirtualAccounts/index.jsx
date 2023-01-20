import React from "react";
import styled from "styled-components";
import { screen, typeScale } from "../../../theme";
import { baniColors } from "../../../theme/colors";
import {
  CopyIcon,
  Flex,
  FormatSquareIcon,
  Input,
  MoreIcon,
  OverviewIcon,
  RowVerticalIcon,
  SearchNormalIcon,
  SettingsT2Icon,
  Text,
} from "../../atoms";
import { Table } from "../Table";
import { generateStatusColor } from "../../../utils/statusColor";

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
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
const IconWrapper = styled(Flex)`
  border: 1px solid ${baniColors.border[50]};
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border: 1px solid ${baniColors.blue};
  }
`;
const SearchIcon = styled(SearchNormalIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: ${baniColors.white};
`;
export const VirtualAccounts = ({ virtualAccounts, setActivityFieldData }) => {
  return (
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
            <IconWrapper margin="0 10px 0 0">
              <OverviewIcon />
            </IconWrapper>
            <IconWrapper>
              <RowVerticalIcon />
            </IconWrapper>
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

          <Flex width="50%" position="relative">
            <SearchIcon />
            <Input placeholder="Search for virtual accounts" type="search" />
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

          <Flex alignItems="center" cursor="pointer">
            <Text
              margin="0 8px 0 0"
              color={baniColors.blue}
              fontSize={typeScale.helperText}
            >
              Manage
            </Text>
            <SettingsT2Icon color={baniColors.blue} />
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
            data={virtualAccounts.map((item, idx) => {
              return (
                <tr onClick={() => setActivityFieldData(idx)}>
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
                    <Flex
                      alignItems="center"
                      backgroundColor={
                        generateStatusColor(item.linkedBranchStatus).bgColor
                      }
                      padding="5px"
                    >
                      <FormatSquareIcon
                        color={
                          generateStatusColor(item.linkedBranchStatus).color
                        }
                      />
                      <Text
                        margin="0 0 0 10px"
                        fontSize={typeScale.smaller}
                        color={
                          generateStatusColor(item.linkedBranchStatus).color
                        }
                        fontWeight="600"
                      >
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
  );
};
