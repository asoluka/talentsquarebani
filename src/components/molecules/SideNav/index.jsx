import { Link } from "react-router-dom";
import styled from "styled-components";
import { baniColors } from "../../../theme/colors";
import { typeScale } from "../../../theme";
import { Flex, Text } from "../../atoms";

const Wrapper = styled.nav`
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const LinkItem = styled(Link)`
  color: ${baniColors.lightGrey};
  text-decoration: none;
  font-size: ${typeScale.paragraph};
  display: block;
`;
const TopLinks = styled.div`
  & div:not(:last-child) {
    padding-bottom: 16px;
  }
`;
const BottomLinks = styled.div`
  & div:not(:last-child) {
    padding-bottom: 16px;
  }
`;
const LinkHeading = styled(Text)`
  text-transform: uppercase;
  font-weight: 600;
  padding: 6px 0 16px 0;
  margin: 0;
`;

export const SideNav = () => {
  return (
    <Wrapper>
      <TopLinks>
        <Flex>
          <LinkItem>Welcome</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Compliance</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Overview</LinkItem>
        </Flex>

        <LinkHeading type="p">BUSINESS</LinkHeading>
        <Flex>
          <LinkItem>Products</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Customers</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Orders</LinkItem>
        </Flex>

        <LinkHeading type="p">PAYMENTS</LinkHeading>
        <Flex>
          <LinkItem>Wallets</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Transactions</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Virtual Account</LinkItem>
        </Flex>
      </TopLinks>

      <BottomLinks>
        <Flex>
          <LinkItem>Live mode</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Settings</LinkItem>
        </Flex>
        <Flex>
          <LinkItem>Audit logs</LinkItem>
        </Flex>
      </BottomLinks>
    </Wrapper>
  );
};
