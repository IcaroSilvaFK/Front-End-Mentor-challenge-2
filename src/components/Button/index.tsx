import { ButtonVariants } from './variants';

import { Container } from './styles';
import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  variant: ButtonVariants;
}

export function Button({ variant, children }: IButtonProps) {
  return <Container variant={variant}>{children}</Container>;
}
