import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 30px;

  align-items: flex-start;

  h2 {
    font-size: 4rem;
  }

  .container__principal {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container__content {
    max-width: 400px;
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 30px;

    p {
      color: ${({ theme }) => theme.colors.mediunGray};
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    .container__content {
      width: 100%;
      text-align: center;
      align-items: center;
      padding: 8px;

      p {
        color: ${({ theme }) => theme.colors.mediunGray};
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-self: flex-end;
  flex-direction: row;

  gap: 20px;

  img {
    width: 100px;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 60px;
    }
  }
`;
