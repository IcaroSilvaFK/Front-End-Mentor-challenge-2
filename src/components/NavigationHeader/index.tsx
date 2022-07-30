import { useState } from 'react';

import { CompanyModal } from '../CompanyModal';
import { FeaturesModal } from '../FeaturesModal';

import { Container } from './styles';

export function NavigationHeader() {
  const [fetureModalIsVisible, setFetureModalIsVisible] = useState(false);
  const [companyModalIsVisible, setCompanyModalIsVisible] = useState(false);

  function handleLeaveMouseCompanyModal() {
    setCompanyModalIsVisible((prev) => !prev);
  }

  function handleLeaveMouseFeatureModal() {
    setFetureModalIsVisible((prev) => !prev);
  }

  return (
    <Container>
      <ul className='container__navigation'>
        <li aria-label='button' onClick={handleLeaveMouseFeatureModal}>
          Features
          <img
            src={
              fetureModalIsVisible
                ? '/assets/icon-arrow-up.svg'
                : '/assets/icon-arrow-down.svg'
            }
            alt='Arrow down'
          />
          <FeaturesModal isVisible={fetureModalIsVisible} />
        </li>
        <li aria-label='button' onClick={handleLeaveMouseCompanyModal}>
          Company
          <img
            src={
              companyModalIsVisible
                ? '/assets/icon-arrow-up.svg'
                : '/assets/icon-arrow-down.svg'
            }
            alt='Arrow down'
          />
          <CompanyModal isVisible={companyModalIsVisible} />
        </li>
        <li>
          <a href='/'>Carrers</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
      </ul>
    </Container>
  );
}
