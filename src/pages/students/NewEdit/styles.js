import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.6rem;
    color: #444;
  }
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #ee4d64;
    color: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    border: 0;
    font-weight: bold;
    margin-right: 15px;

    display: flex;
    align-items: center;

    &:first-child {
      background: #ccc;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const FormContainer = styled.div`
  width: 60%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;

    strong {
      color: #444;
      font-size: 1.6rem;
    }

    input {
      padding: 15px;
      font-size: 1.6rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 10px 0 20px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 15px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    input {
      margin-bottom: 0;
    }
  }
`;
