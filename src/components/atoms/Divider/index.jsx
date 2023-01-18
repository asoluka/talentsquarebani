import styled from "styled-components";
import { baniColors } from "../../../theme/colors";

export const Divider = styled.div`
  border-bottom: 1px solid ${baniColors.border};
  margin: ${({ margin }) => margin || "10px 0"};
`;
