import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;

  justify-content: space-between;

  max-width: 1000px;

  margin: 0 auto;

  section {
    .desktop__image {
      width: 400px;
    }
    .mobile__image {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    width: 100%;

    section {
      display: flex;
      align-items: center;
      justify-content: center;
      .desktop__image {
        display: none;
      }
      .mobile__image {
        display: block;
        max-width: 100%;
      }
    }
  }
`;
