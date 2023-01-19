import styled from "styled-components";
import { typeScale } from "../../../theme";
import { baniColors } from "../../../theme/colors";
import { Flex } from "../../atoms";

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
    background-color: #d6eeee;
    cursor: pointer;
  }

  & td,
  th {
    padding: 8px 24px;
  }
`;
const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
`;

export const Table = ({ data }) => {
  return (
    <Wrapper>
      <table>
        <tr>
          <th>Bank Name</th>
          <th>Account Number</th>
          <th></th>
          <th>Total Inflow</th>
          <th></th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>
                <Flex alignItems="center">
                  <Image src={item.bankLogo} alt={item.bankName} />{" "}
                  {item.bankName}
                </Flex>
              </td>
              <td>{item.accountNumber} Icon</td>
              <td>{item.linkedBranch}</td>
              <td>{item.totalInflow}</td>
              <td>.</td>
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
};
