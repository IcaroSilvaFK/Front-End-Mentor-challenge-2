import { useState } from 'react';

import { Button } from '../../Button';
import { CompanyList } from '../CompanyList';
import { FeaturesList } from '../FeaturesList';

import { Container, Column } from './styles';

interface IMenuMobileProps {
  handleCloseMenu: () => void;
}

export default function MenuMobile({ handleCloseMenu }: IMenuMobileProps) {
  const [fetureModalIsVisible, setFetureModalIsVisible] = useState(false);
  const [companyModalIsVisible, setCompanyModalIsVisible] = useState(false);

  function handleChangeFeatureList() {
    setFetureModalIsVisible((prev) => !prev);
  }

  function handleChangeCompanyList() {
    setCompanyModalIsVisible((prev) => !prev);
  }

  return (
    <Container onClick={handleCloseMenu}>
      <ul className='container__menu' onClick={(e) => e.stopPropagation()}>
        <div className='container__closerButton'>
          <button onClick={handleCloseMenu}>
            <img src='/assets/icon-close-menu.svg' alt='' />
          </button>
        </div>
        <li onClick={handleChangeFeatureList}>
          Features
          <img
            src={
              fetureModalIsVisible
                ? '/assets/icon-arrow-up.svg'
                : '/assets/icon-arrow-down.svg'
            }
            alt='Arrow down'
          />
        </li>
        {fetureModalIsVisible && <FeaturesList />}
        <li onClick={handleChangeCompanyList}>
          Company
          <img
            src={
              companyModalIsVisible
                ? '/assets/icon-arrow-up.svg'
                : '/assets/icon-arrow-down.svg'
            }
            alt='Arrow down'
          />
        </li>
        {companyModalIsVisible && <CompanyList />}
        <li>Carrers</li>
        <li>About</li>
        <Column>
          <Button variant='link'>Login</Button>
          <Button variant='outline'>Register</Button>
        </Column>
      </ul>
    </Container>
  );
}
