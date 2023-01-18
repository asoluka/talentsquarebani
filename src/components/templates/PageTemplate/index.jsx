import PropTypes from "prop-types";
import styled from "styled-components";
import { PageScrollBar } from "../../atoms";

const isMobile = window.innerWidth <= 768;

const Wrapper = styled.div``;

const Header = styled.header`
  border-bottom: 1.5px solid #dedee3;
`;

const Footer = styled.footer``;

const Section = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  height: ${isMobile ? "100%" : "calc(100vh - 62px)"};
  overflow-y: auto;
  /* -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  } */
  ${PageScrollBar}
`;

const Main = styled.main`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const PageTemplate = ({ header, children, footer, backgroundColor }) => (
  <Wrapper>
    {header && <Header>{header}</Header>}

    <Main>
      <Section backgroundColor={backgroundColor}>
        {children}
        {footer && <Footer>{footer}</Footer>}
      </Section>
    </Main>
  </Wrapper>
);

PageTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  backgroundColor: PropTypes.string,
  children: PropTypes.any.isRequired,
};
