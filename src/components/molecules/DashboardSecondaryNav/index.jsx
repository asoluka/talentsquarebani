import styled from "styled-components";
import { baniColors } from "../../../theme/colors";
import { screen } from "../../../theme";
import { AddIcon, Flex, FormatSquareIcon, Text } from "../../atoms";

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
const SecondaryMenuLink = styled(Flex)`
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

export const DashboardSecondaryNav = () => {
  return (
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
        <SecondaryMenuLink margin="0 10px 0 0" color={baniColors.lightGrey}>
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
  );
};
