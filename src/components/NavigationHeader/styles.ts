import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;

  .container__navigation {
    display: flex;
    align-items: center;

    gap: 22px;

    color: ${({ theme }) => theme.colors.mediunGray};

    li {
      position: relative;
      z-index: 1;
      display: flex;
      gap: 4px;
      align-items: center;
      cursor: pointer;
      a {
        :hover {
          color: ${({ theme }) => theme.colors.almostBlack};
        }
      }
      :hover {
        color: ${({ theme }) => theme.colors.almostBlack};
      }
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
