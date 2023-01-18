import PropTypes from "prop-types";
import Styled, { css } from "styled-components";
import { primaryFont, screen } from "../../../theme/theme-utils";

const styles = css`
  font-family: ${primaryFont};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ lineHeight }) => lineHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-transform: ${({ textTransform }) => textTransform};
  cursor: ${({ cursor }) => cursor};
  white-space: ${({ whitespace }) => whitespace};
  border-right: ${({ borderRight }) => borderRight};
  border-left: ${({ borderLeft }) => borderLeft};
  @media only screen and (${screen.sm}) {
    width: ${({ width }) => width || "95%"};
  }
`;

const StyledText = Styled.span`
    ${styles}
`;

const StyledParagraph = Styled.p`
    ${styles}
`;

const StyledH1 = Styled.h1`
    ${styles}
    font-size: ${({ fontSize }) => fontSize || "2em"};
`;

const StyledH2 = Styled.h2`
    ${styles}
    font-size: ${({ fontSize }) => fontSize || "1.5em"};
`;

const StyledH3 = Styled.h3`
    ${styles}
    font-size: ${({ fontSize }) => fontSize || "1.17em"};
`;

export const FormTitle = Styled.h2`
  margin: 0 0 16px 0;
  font-weight: bold;
  font-size: 1.8rem;
  ${styles}
`;

export const SubText = Styled.p`
  margin: 0 0 16px 0;
  font-size: 0.7rem;
  line-height: 1.1rem;
  width: 85%;
  color:#757575;
  ${styles}
`;

export const InputTitle = Styled.p`
  /* font-size: 0.8rem; */
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  line-height: 1.1rem;
  ${styles}
`;

export const InputSubTitle = Styled.p`
  font-size: 0.7rem;
  line-height: 1.1rem;
  color:#757575;
  ${styles}
`;

export const Text = ({
  children,
  color,
  fontSize,
  fontStyle,
  cursor,
  type,
  width,
  height,
  textDecoration,
  textTransform,
  lineHeight,
  padding,
  margin,
  fontWeight,
  textAlign,
  className,
  onClick,
  whitespace,
  border,
  borderLeft,
  borderRight,
  dataAttrTest,
}) => {
  if (type === "h1") {
    return (
      <StyledH1
        color={color}
        fontSize={fontSize}
        fontStyle={fontStyle}
        width={width}
        cursor={cursor}
        height={height}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        textDecoration={textDecoration}
        className={className}
        onClick={onClick}
        whitespace={whitespace}
        data-test={dataAttrTest}
      >
        {children}
      </StyledH1>
    );
  }

  if (type === "p") {
    return (
      <StyledParagraph
        color={color}
        fontSize={fontSize}
        fontStyle={fontStyle}
        cursor={cursor}
        width={width}
        height={height}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        padding={padding}
        textDecoration={textDecoration}
        textTransform={textTransform}
        margin={margin}
        textAlign={textAlign}
        className={className}
        onClick={onClick}
        whitespace={whitespace}
        border={border}
        data-test={dataAttrTest}
      >
        {children}
      </StyledParagraph>
    );
  }

  if (type === "h2") {
    return (
      <StyledH2
        color={color}
        fontSize={fontSize}
        fontStyle={fontStyle}
        cursor={cursor}
        textDecoration={textDecoration}
        width={width}
        height={height}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}
        onClick={onClick}
        whitespace={whitespace}
        data-test={dataAttrTest}
      >
        {children}
      </StyledH2>
    );
  }

  if (type === "h3") {
    return (
      <StyledH3
        color={color}
        fontSize={fontSize}
        fontStyle={fontStyle}
        cursor={cursor}
        width={width}
        height={height}
        lineHeight={lineHeight}
        textDecoration={textDecoration}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        textAlign={textAlign}
        className={className}
        onClick={onClick}
        whitespace={whitespace}
        data-test={dataAttrTest}
      >
        {children}
      </StyledH3>
    );
  }

  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontStyle={fontStyle}
      cursor={cursor}
      width={width}
      height={height}
      borderLeft={borderLeft}
      borderRight={borderRight}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
      padding={padding}
      margin={margin}
      fontWeight={fontWeight}
      textAlign={textAlign}
      className={className}
      onClick={onClick}
      whitespace={whitespace}
      data-test={dataAttrTest}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  // lineHeight: "30px",
};

Text.propTypes = {
  children: PropTypes.any,
  color: PropTypes.any,
  fontStyle: PropTypes.string,
  fontSize: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  className: PropTypes.string,
};
