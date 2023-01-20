import { Link } from "react-router-dom";
import styled from "styled-components";
import { baniColors } from "../../../theme/colors";
import { screen, typeScale } from "../../../theme";
import {
  AuditLogs,
  ComplianceIcon,
  CustomersIcon,
  EyeIcon,
  Flex,
  OrdersIcon,
  OverviewIcon,
  ProductsIcon,
  SettingsT1Icon,
  Text,
  TransactionsIcon,
  VirtualAccountsIcon,
  WalletIcon,
  WelcomeIcon,
} from "../../atoms";

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
  display: flex;
  align-items: center;
`;
const TopLinks = styled.div`
  & div:not(:last-child) {
    padding-bottom: 16px;
  }

  @media only screen and (${screen.sm}) {
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto;
    padding: 10px;
    width: 100%;
  }
`;
const BottomLinks = styled.div`
  & div:not(:last-child) {
    padding: 16px 0;
  }

  @media only screen and (${screen.sm}) {
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto;
    padding: 10px;
    width: 100%;
  }
`;
const LinkHeading = styled(Text)`
  text-transform: uppercase;
  font-weight: 600;
  padding: 6px 0 16px 0;
  margin: 0;
`;
const LinkTextWrapper = styled.span`
  display: block;
  margin-left: 10px;
`;

export const SideNav = () => {
  return (
    <Wrapper>
      <TopLinks>
        <div>
          <Flex>
            <LinkItem>
              <WelcomeIcon />
              <LinkTextWrapper>Welcome</LinkTextWrapper>
            </LinkItem>
          </Flex>
          <Flex>
            <LinkItem>
              <ComplianceIcon />
              <LinkTextWrapper>Compliance</LinkTextWrapper>
            </LinkItem>
          </Flex>
          <Flex>
            <LinkItem>
              <OverviewIcon />
              <LinkTextWrapper>Overview</LinkTextWrapper>
            </LinkItem>
          </Flex>
        </div>

        <div>
          <LinkHeading type="p">BUSINESS</LinkHeading>
          <Flex>
            <LinkItem>
              <ProductsIcon />
              <LinkTextWrapper>Products</LinkTextWrapper>
            </LinkItem>
          </Flex>
          <Flex>
            <LinkItem>
              <CustomersIcon />
              <LinkTextWrapper>Customers</LinkTextWrapper>
            </LinkItem>
          </Flex>
          <Flex>
            <LinkItem>
              <OrdersIcon />
              <LinkTextWrapper>Orders</LinkTextWrapper>
            </LinkItem>
          </Flex>
        </div>

        <div>
          <LinkHeading type="p">PAYMENTS</LinkHeading>
          <Flex>
            <LinkItem>
              <WalletIcon />
              <LinkTextWrapper>Wallets</LinkTextWrapper>
            </LinkItem>
          </Flex>
          <Flex>
            <LinkItem>
              <TransactionsIcon />
              <LinkTextWrapper>Transactions</LinkTextWrapper>
            </LinkItem>
          </Flex>
          <Flex>
            <LinkItem>
              <VirtualAccountsIcon />
              <LinkTextWrapper>Virtual Account</LinkTextWrapper>
            </LinkItem>
          </Flex>
        </div>
      </TopLinks>

      <BottomLinks>
        <Flex>
          <LinkItem>
            <EyeIcon />
            <LinkTextWrapper>Live mode</LinkTextWrapper>
          </LinkItem>
        </Flex>
        <Flex>
          <LinkItem>
            <SettingsT1Icon />
            <LinkTextWrapper>Settings</LinkTextWrapper>
          </LinkItem>
        </Flex>
        <Flex>
          <LinkItem>
            <AuditLogs />
            <LinkTextWrapper>Audit logs</LinkTextWrapper>
          </LinkItem>
        </Flex>
      </BottomLinks>
    </Wrapper>
  );
};
