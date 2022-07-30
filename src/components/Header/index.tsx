import { Button } from '../Button';
import { NavigationHeader } from '../NavigationHeader';

import { Container, ContainerButtons, MenuBurger } from './styles';

interface IHeaderProps {
  onPressMenuBurguer: () => void;
}

export function Header({ onPressMenuBurguer }: IHeaderProps) {
  return (
    <Container>
      <div>
        <h1>snap</h1>
        <NavigationHeader />
        <MenuBurger onClick={onPressMenuBurguer}>
          <img src='/assets/icon-menu.svg' alt='' />
        </MenuBurger>
      </div>

      <ContainerButtons>
        <Button variant='link'>Login</Button>
        <Button variant='outline'>Register</Button>
      </ContainerButtons>
    </Container>
  );
}
