import React from "react";
import {
  ArrowDownT1Icon,
  ArrowRightIcon,
  Flex,
  FormatSquareIcon,
  Text,
} from "../../atoms";
import styled from "styled-components";
import { baniColors } from "../../../theme/colors";
import { screen, typeScale } from "../../../theme";
import { Link } from "react-router-dom";
import { Table } from "../Table";
import toTitleCase from "../../../utils/toTitleCase";
import { generateStatusColor } from "../../../utils/statusColor";

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
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

export const DashboardActivityFeed = ({ activityField }) => {
  const statusColor = generateStatusColor(
    activityField?.linkedBranchStatus
  ).color;
  const statusBgColor = generateStatusColor(
    activityField?.linkedBranchStatus
  ).bgColor;

  return (
    <ActivityFeedSection>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="16px 24px"
      >
        <Flex alignItems="center">
          <Text
            type="p"
            fontWeight="600"
            margin="0"
            fontSize={typeScale.paragraph}
            whitespace="nowrap"
          >
            Activity Feed -{" "}
            <Text
              margin="0"
              fontWeight="400"
              fontSize={typeScale.paragraph}
              whitespace="nowrap"
            >
              {activityField?.bankAbbreviation}
            </Text>
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Text margin="0" fontSize={typeScale.small} whitespace="nowrap">
            <Text color={statusColor}>
              {toTitleCase(activityField?.linkedBranchStatus)}
            </Text>{" "}
            - Created {activityField?.createdAt}
          </Text>
        </Flex>
      </Flex>

      <Flex backgroundColor={statusBgColor} margin="0 0 20px 0">
        <Image
          style={{ position: "relative", top: "20px", left: "24px" }}
          src={activityField?.bankLogo}
          alt={activityField?.bankName}
        />
      </Flex>

      <Flex
        padding="12px 24px"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <Text type="p" fontWeight="600" margin="0">
            {activityField?.bankName}
          </Text>
          <Text type="p" margin="6px 0">
            {activityField?.accountNumber}
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
        <div style={{ marginRight: "20px" }}>
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
            {activityField?.totalInflow}
          </Text>
        </div>

        <div style={{ marginRight: "20px" }}>
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
            {activityField?.lastActivityDate}
          </Text>
        </div>

        <div style={{ marginRight: "20px" }}>
          <Text
            type="p"
            fontSize={typeScale.small}
            color={baniColors.lightGrey}
            margin="0 0 6px 0"
            whitespace="nowrap"
          >
            Linked Branch
          </Text>
          <Flex padding="2px" backgroundColor={statusBgColor}>
            <FormatSquareIcon color={statusColor} />
            <Text
              type="p"
              fontWeight="600"
              margin="0 0 0 10px"
              fontSize={typeScale.small}
              whitespace="nowrap"
              color={statusColor}
            >
              Dodo - {activityField?.linkedBranch}
            </Text>
          </Flex>
        </div>
      </VirtualAccountSummary>

      <section style={{ overflowX: "auto" }}>
        <Table
          padding="10px 16px"
          small={true}
          columnTitles={["Transaction Details", "Amount", "Date", ""]}
          data={activityField?.transactions.map((item, idx) => {
            return (
              <tr key={idx}>
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
  );
};
