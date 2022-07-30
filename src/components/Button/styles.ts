import styled, { css } from 'styled-components';

import { ButtonVariants } from './variants';

type ButtonProps = {
  variant: ButtonVariants;
};

export const Container = styled.button<ButtonProps>`
  transition: all linear 0.3s;

  ${({ variant }) =>
    variant === 'link' &&
    css`
      background: transparent;
      padding: 5px;
    `}

  ${({ variant }) =>
    variant === 'outline' &&
    css`
      padding: 8px 14px;

      background: transparent;

      border: 1px solid ${({ theme }) => theme.colors.almostBlack};

      border-radius: 10px;
    `}
    ${({ variant }) =>
    variant === 'solid' &&
    css`
      padding: 14px 26px;

      background: ${({ theme }) => theme.colors.almostBlack};
      color: ${({ theme }) => theme.colors.almostWhite};

      border: 1px solid ${({ theme }) => theme.colors.almostBlack};

      border-radius: 10px;

      font-size: ${({ theme }) => theme.sizes.large};
      font-weight: bold;

      :hover {
        background: transparent;

        color: ${({ theme }) => theme.colors.almostBlack};

        outline: 1px solid ${({ theme }) => theme.colors.almostBlack};
      }
    `}
`;
