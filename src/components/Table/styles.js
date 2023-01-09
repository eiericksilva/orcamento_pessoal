import styled from "styled-components";

export const TableContainer = styled.table`
  border: none;
  background-color: #132f4c;
  width: 80%;
  margin: 0 auto;
  overflow-y: auto;
  padding: 10px;

  caption {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 20px;
  }

  tr {
    &:hover {
      background-color: #071b2f;
    }
  }

  th {
    color: #ffffff;
    height: 50px;
    border-bottom: 1px solid #ffffff;
    background-color: #0059b2;
  }

  td {
    color: #ffffff;
    height: 30px;
    text-align: center;
    vertical-align: center;
    border-bottom: 1px solid #ffffff;
  }
`;
