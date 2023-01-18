import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { primaryFont, defaultTheme, screen } from "../../../theme";
import { ifProp } from "styled-tools";
import { baniColors } from "../../../theme/colors";
import { Text } from "../Text";

const styles = css`
  font-family: ${primaryFont};
  display: block;
  width: 100%;
  flex-grow: ${(grow) => grow}
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
  font-size: 14px;
  background: ${({ background }) => background};
  padding: ${({ padding }) =>
    !padding
      ? ifProp({ type: "textarea" }, "0.4444444444em", "0 0.4444444444em")
      : padding};
  outline: none;
  height: ${ifProp({ type: "textarea" }, "auto", "40px")};
  min-height: ${({ minHeight }) => minHeight}
  width: ${({ width }) => width};
  border: ${({ border }) =>
    !border
      ? `1px solid ${ifProp(
          "error",
          defaultTheme.status.errorColor,
          "#bdbdbd"
        )}`
      : border};
  cursor: ${ifProp("disabled", "not-allowed", "auto")};
  border-radius: ${({ borderRadius }) => borderRadius || "15px"}; 
  border-left: ${(borderLeft) => borderLeft} &[type= 'checkbox' ],
    &[type= 'radio' ] {
    display: inline-block;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  &:focus {
    border: ${({ border }) =>
      !border
        ? `1px solid ${ifProp(
            "error",
            defaultTheme.status.errorColor,
            defaultTheme.disabled
          )}`
        : "none"};
    outline:none; 
  }
`;
const ErrorMessage = styled(Text)`
  color: red;
  margin-top: 5px;
`;
export const StyledTextarea = styled.textarea`
  font-family: ${primaryFont};
  border: 1px solid #bdbdbd;
  background-color: white;

  &:focus {
    border: 0;
    outline: 1px solid ${baniColors.blue};
  }

  &.error {
    border: 0;
    outline: 1px solid red;
  }
`;
export const RangeInput = styled.input`
  & {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #1b76af;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 7px;
    background: #0e689d;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #1b76af;
  }
  &::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #1b76af;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 7px;
    background: #0e689d;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 20px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #1b76af;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: #1b76af;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  &::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 7px;
    background: #0e689d;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #1b76af;
  }
  &:focus::-ms-fill-upper {
    background: #1b76af;
  }

  ${styles}
`;
export const StyledSelect = styled.select`
  ${styles}
`;
const StyledInput = styled.input`
  font-family: ${primaryFont};
  background-color: transparent;
  border: ${({ border }) => border || "1px solid #bdbdbd"};
  outline: none;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  visibility: ${({ visibility }) => visibility};
  border-radius: ${({ borderRadius }) => borderRadius};
  @media (${screen.md}) {
    font-size: 0.85rem;
  }

  &:focus {
    border: 1px solid ${baniColors.blue} !important;
    outline: none;
    border: ${({ border }) => border || "none"};
  }

  &.error {
    border: 0;
    outline: 1px solid red;
  }
`;
const RadioWrapper = styled.div`
  ${styles}
  padding: 0;
  height: fit-content;
  cursor: pointer;
`;
const RadioLabel = styled.label`
  display: flex;
`;
const RadioInput = styled.input`
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #000000;
  }

  &:checked::before {
    transform: scale(0.3);
  }
`;

export const Input = (props) => {
  const {
    errorMessage,
    errors,
    placeholder,
    value,
    onChange,
    onBlur,
    marginTop,
    padding,
    type,
    id,
    name,
    outline,
    visibility,
    readOnly,
    dataAttrTest,
    className,
    onFocus,
    margin,
    hasClass = true,
    border,
    borderRadius,
    min,
    rows,
  } = props;

  if (type === "textarea") {
    return (
      <>
        <StyledTextarea
          data-test={dataAttrTest}
          rows={rows}
          className={className}
          onChange={onChange}
          value={value}
        />
        {errors && <ErrorMessage type="p">{errorMessage}</ErrorMessage>}
      </>
    );
  }

  if (type === "select") {
    return (
      <div>
        <StyledSelect data-test={dataAttrTest} {...props} />
        {errors && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }

  return (
    <>
      <StyledInput
        visibility={visibility}
        outline={outline}
        onFocus={onFocus}
        type={type || "text"}
        onBlur={onBlur}
        placeholder={placeholder}
        className={
          hasClass &&
          `text-black text-xs font-light  ${
            !padding && "py-4  px-5"
          } rounded-full w-full placeholder-black ${
            marginTop ? marginTop : "mt-2"
          } ${errors && "error"}`
        }
        value={value}
        onChange={onChange}
        id={id}
        border={border}
        readOnly={readOnly}
        name={name}
        data-test={dataAttrTest}
        borderRadius={borderRadius}
        padding={padding}
        margin={margin}
        min={min}
      />
      {errors && <ErrorMessage type="p">{errorMessage}</ErrorMessage>}
    </>
  );
};

export const RadioButton = ({
  checked,
  value,
  name,
  onChange,
  label,
  margin,
  padding,
  dataAttrTest,
}) => {
  return (
    <RadioWrapper margin={margin} padding={padding}>
      <RadioLabel>
        <RadioInput
          name={name}
          checked={checked}
          type="radio"
          value={value}
          onChange={onChange}
          data-test={dataAttrTest}
        />
        {label}
      </RadioLabel>
    </RadioWrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  margin: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  error: PropTypes.string,
  background: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.string,
  borderLeft: PropTypes.string,
  dataAttrTest: PropTypes.string,
};

// Input.defaultProps = {
//   type: "text",
//   height: 40,
//   background: "transparent",
//   border: `1px solid ${baniColors.border[200]}`,
//   margin: "0",
// };
