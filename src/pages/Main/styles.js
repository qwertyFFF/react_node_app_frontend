import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000033;

  form {
    width: 300px;
    display: flex;
    flex-direction: column;

    input {
      height: 48px;
      border: 1px solid #DDD;
      border-radius: 4px;
      font-size: 16px;
      padding: 0 20px;
      margin-top: 30px;
    }

    button {
      height: 48px;
      background: #33ccff;
      border-radius: 4px;
      font-size: 16px;
      padding: 0 20px;
      margin-top: 10px;
      color: #FFF;
      font-weight: bold;
      border: 0;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Img = styled.img`
  align-items: center;
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 20vmin;
  pointer-events: none;

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
