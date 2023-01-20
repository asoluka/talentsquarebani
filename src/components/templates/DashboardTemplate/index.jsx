import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex } from "../../atoms";
import { baniColors } from "../../../theme/colors";
import { screen } from "../../../theme";

const isMobile = window.innerWidth <= 768;
const Wrapper = styled.div``;
const Header = styled.nav`
  border-bottom: 1.5px solid #dedee3;
`;
const SideBar = styled.aside`
  width: 15%;

  @media only screen and (${screen.md}) {
    width: 30%;
  }

  @media only screen and (${screen.sm}) {
    width: 100%;
  }
`;
const Section = styled(Flex)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  height: ${isMobile ? "100%" : "calc(100vh - 62px)"};
  overflow-y: auto;

  @media only screen and (${screen.sm}) {
    display: block;
  }
`;
const Main = styled.main`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: ${baniColors.background};

  @media only screen and (${screen.md}) {
    width: 70%;
  }

  @media only screen and (${screen.sm}) {
    width: 100%;
  }
`;

export const DashboardTemplate = ({
  header,
  children,
  sidebar,
  backgroundColor,
}) => (
  <Wrapper>
    {header && <Header>{header}</Header>}

    <Section backgroundColor={backgroundColor}>
      {sidebar && <SideBar>{sidebar}</SideBar>}
      <Main>{children}</Main>
    </Section>
  </Wrapper>
);

DashboardTemplate.propTypes = {
  header: PropTypes.node,
  sidebar: PropTypes.node,
  backgroundColor: PropTypes.string,
  children: PropTypes.any.isRequired,
};
