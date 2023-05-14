import styled from "styled-components";

export const StyledTable = styled.table`
  margin: 0 auto;
  margin-top: 5%;
  width: 90%;
  border-collapse: collapse;
  border-spacing: 0 10px;
  th {
    background-color: var(--main-accent-color);
    color: white;
    font-weight: 400;
    padding: 10px;
    border-bottom: 1px solid var(--grey-color);
    text-align: left;
    :nth-child(5) {
      text-align: center;
    }
    :last-child {
      text-align: center;
    }
  }
  thead {
    margin-bottom: 5px;
  }
  tr {
    background-color: rgba(255, 255, 255, 0.1);
  }
  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.2);
  }
  tr:hover {
    background-color: rgba(255, 255, 255, 0.5);
    td {
      color: var(--black-color);
    }
  }
  td {
    padding: 5px;
    color: white;
    border-bottom: 1px solid var(--grey-color);
    font-size: 0.9em;
  }
  td:last-child {
    width: 80px;
  }
  td:nth-child(5) {
    width: 80px;
  }
  button {
    background-color: var(--black-color);
    color: white;
    border: none;
    padding: 5px 10px;
    width: 80px;
    transition: background-color 0.3s ease;
    :hover {
      background-color: var(--secondary-accent-color);
    }
    :active {
      background-color: var(--main-accent-color);
    }
  }
`;
