import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  width: 50%;
  height: 70%;
  img {
    width: 40%;
    padding-bottom: 20%;
  }
`;
export const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid var(--black-color);
    margin-bottom: 15%;
    :hover {
      border: none;
      border-bottom: 1px solid var(--secondary-accent-color);
    }
    :focus {
      outline: none;
      border-bottom: 2px solid var(--main-accent-color);
    }
  }
  button {
    width: 30%;
    padding: 8px 6px;
    align-self: flex-end;
    border: none;
    border-radius: 0;
    background-color: var(--black-color);
    color: white;
    transition: background-color 0.3s ease;
    :hover {
      background-color: var(--secondary-accent-color);
    }
    :active {
      background-color: var(--main-accent-color);
    }
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  button:first-child {
    background-color: var(--grey-color);
    transition: background-color 0.3s ease;
    :hover {
      background-color: var(--secondary-accent-color);
    }
    :active {
      background-color: var(--black-color);
    }
  }
  button:nth-child(3) {
    background-color: var(--grey-color);
    transition: background-color 0.3s ease;
    :hover {
      background-color: var(--secondary-accent-color);
    }
    :active {
      background-color: var(--black-color);
    }
  }
`;
