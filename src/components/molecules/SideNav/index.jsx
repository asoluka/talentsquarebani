import { Link } from "react-router-dom";
import styled from "styled-components";
import { baniColors } from "../../../theme/colors";
import { screen, typeScale } from "../../../theme";
import {
  AuditLogs,
  ComplianceIcon,
  CustomersIcon,
  LiveModeIcon,
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

  &:hover {
    font-weight: 600;
  }
`;
const TopLinks = styled.div`
  & div:not(:last-child) {
    padding-bottom: 16px;
  }

  @media only screen and (${screen.sm}) {
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto auto;
    padding: 10px;
    width: 100%;
  }
`;
const BottomLinks = styled.div`
  background-color: "#F5F6FA33";
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

  @media only screen and (${screen.sm}) {
    display: none;
  }
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
              <Flex direction="column">
                <LinkTextWrapper>Virtual Account</LinkTextWrapper>
                <Text
                  fontWeight="500"
                  color={baniColors.green}
                  fontSize={typeScale.smaller}
                  margin="5px 0 0 10px"
                >
                  New
                </Text>
              </Flex>
            </LinkItem>
          </Flex>
        </div>
      </TopLinks>

      <BottomLinks>
        <Flex>
          <LinkItem>
            <LiveModeIcon />
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
