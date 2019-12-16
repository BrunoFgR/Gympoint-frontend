import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 55%;
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

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Table = styled.div`
  width: 55%;

  table {
    background: #fff;
    width: 100%;
    margin-top: 20px;
    border-radius: 4px;
    padding: 30px;

    th {
      text-align: start;
      font-size: 1.6rem;
      color: #444;
      padding-bottom: 20px;
    }

    .center {
      text-align: center;
    }

    tbody {
      tr:first-child {
        td {
          padding-top: 0;
        }
      }

      tr:last-child {
        td {
          border: 0;
          padding-bottom: 0;
        }
      }

      td {
        font-size: 1.6rem;
        color: #666;
        padding: 15px 0;
        border-bottom: 1px solid #eee;

        &:last-child {
          text-align: end;
        }

        button {
          background: #fff;
          border: 0;
          color: #4d85ee;
          margin-left: 20px;
        }
      }
    }
  }
`;
