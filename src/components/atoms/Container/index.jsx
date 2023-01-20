import styled from "styled-components";
import { screen } from "../../../theme";

export const Container = styled.div`
  @media only screen and (${screen.sm}) {
    width: 100%;
  }

  @media only screen and (${screen.md}) {
    width: 90%;
  }

  width: 85%;
  margin: auto;
`;
