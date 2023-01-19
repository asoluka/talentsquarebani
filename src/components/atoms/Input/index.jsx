import PropTypes from "prop-types";
import styled from "styled-components";
import { primaryFont, typeScale } from "../../../theme";
import { baniColors } from "../../../theme/colors";

const StyledInput = styled.input`
  font-family: ${primaryFont};
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px solid ${baniColors.border[50]};
  padding: 0 12px;
  &::placeholder {
    color: ${baniColors.lightGrey};
    font-size: ${typeScale.helperText};
  }
`;

export const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
};
