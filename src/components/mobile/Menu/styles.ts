import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  justify-content: flex-end;

  .container__menu {
    background: ${({ theme }) => theme.colors.almostWhite};

    width: 50%;

    padding: 10px 16px;

    .container__closerButton {
      padding: 10px 0;
      display: flex;
      justify-content: flex-end;

      button {
        background: transparent;
      }
    }

    li + li {
      margin-top: 16px;
    }
    li {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
`;
