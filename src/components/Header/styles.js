import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  background: #fff;
`;

export const Image = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #ddd;

  img {
    height: 32px;
  }
`;

export const Nav = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    margin-left: 30px;

    a {
      color: #999;
      font-size: 1.6rem;
      margin-right: 20px;
      font-weight: bold;

      &[active] {
        color: #444;
      }
    }
  }
`;

export const Profile = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  strong {
    font-size: 1.6rem;
    color: #666;
    font-weight: bold;
    margin: 0 30px 4px 0;
  }

  span {
    font-size: 16px;
    color: #de3b3b;
    margin-right: 30px;
    font-weight: bold;
  }
`;
