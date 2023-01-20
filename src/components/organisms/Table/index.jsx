import styled from "styled-components";
import { typeScale } from "../../../theme";
import { baniColors } from "../../../theme/colors";

const Wrapper = styled.div`
  & table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  & tr {
    border-bottom: 1px solid ${baniColors.border[50]};
    font-size: ${typeScale.paragraph};
  }

  & tr:first-child {
    font-size: ${typeScale.helperText};
    color: ${baniColors.lightGrey};
    font-weight: normal;
  }

  & tr:not(:first-child):hover {
    background-color: ${baniColors.background};
    cursor: pointer;
    border-left: 3px solid ${baniColors.blue};
  }

  & td,
  th {
    padding: ${({ padding }) => padding || "8px 24px"};
    font-size: ${({ small }) =>
      small ? typeScale.small : typeScale.paragraph};
    white-space: nowrap;
  }

  & th {
    font-weight: 400;
  }
`;

export const Table = ({ columnTitles, data, small, padding }) => {
  return (
    <Wrapper small={small} padding={padding}>
      <table>
        <thead>
          <tr>
            {columnTitles.map((title, idx) => (
              <th key={idx}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <>{data}</>
        </tbody>
      </table>
    </Wrapper>
  );
};
