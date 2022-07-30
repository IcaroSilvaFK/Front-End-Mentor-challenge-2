import { useState } from 'react';

import { CompanyModal } from '../CompanyModal';
import { FeaturesModal } from '../FeaturesModal';

import { Container } from './styles';

export function NavigationHeader() {
  const [fetureModalIsVisible, setFetureModalIsVisible] = useState(false);
  const [companyModalIsVisible, setCompanyModalIsVisible] = useState(false);

  function handleLeaveMouseCompanyModal() {
    setCompanyModalIsVisible(false);
  }

  function handleLeaveMouseFeatureModal() {
    setFetureModalIsVisible(false);
  }

  return (
    <Container>
      <ul className='container__navigation'>
        <li>
          <a href='' onMouseEnter={() => setFetureModalIsVisible(true)}>
            Features
            <img
              src={
                fetureModalIsVisible
                  ? '/assets/icon-arrow-up.svg'
                  : '/assets/icon-arrow-down.svg'
              }
              alt='Arrow down'
            />
          </a>
          <FeaturesModal
            isVisible={fetureModalIsVisible}
            mouseLeave={handleLeaveMouseFeatureModal}
          />
        </li>
        <li>
          <a href='' onMouseEnter={() => setCompanyModalIsVisible(true)}>
            Company
            <img
              src={
                companyModalIsVisible
                  ? '/assets/icon-arrow-up.svg'
                  : '/assets/icon-arrow-down.svg'
              }
              alt='Arrow down'
            />
          </a>
          <CompanyModal
            isVisible={companyModalIsVisible}
            mouseLeave={handleLeaveMouseCompanyModal}
          />
        </li>
        <li>
          <a href=''>Carrers</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
      </ul>
    </Container>
  );
}
