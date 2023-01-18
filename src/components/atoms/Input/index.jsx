import PropTypes from "prop-types";
import styled from "styled-components";
import { primaryFont } from "../../../theme";
import { baniColors } from "../../../theme/colors";

const StyledInput = styled.input`
  font-family: ${primaryFont};
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px solid ${baniColors.border[50]};
`;

export const Input = ({ type }) => {
  return <StyledInput type={type} />;
};

Input.propTypes = {
  type: PropTypes.string,
};
