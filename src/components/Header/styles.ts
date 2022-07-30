import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1100px;
  margin: 0 auto;

  padding: 20px 0;

  div:first-child {
    display: flex;

    gap: 30px;
  }
  @media screen and (max-width: 500px) {
    justify-content: space-between;
    width: 100%;

    padding: 20px 10px;

    div:first-child {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MenuBurger = styled.button`
  display: none;

  background: transparent;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
