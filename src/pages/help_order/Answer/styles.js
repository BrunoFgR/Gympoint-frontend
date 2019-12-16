import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.disabled ? 'flex' : 'none')};
  position: absolute;
  top: -60px;
  height: calc(100% + 60px);
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ContainerAnswer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    color: #444;
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.6rem;
    color: #666;
    line-height: 26px;
    margin-bottom: 20px;
  }

  textarea {
    border-radius: 4px;
    height: 130px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

  button[type='button'] {
    background: none;
    border: 0;
    position: relative;
    top: -50px;
    left: 50px;
  }

  button[type='submit'] {
    background: #ee4d64;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    padding: 15px 0;
    border: 0;
    font-size: 1.6rem;
  }
`;
