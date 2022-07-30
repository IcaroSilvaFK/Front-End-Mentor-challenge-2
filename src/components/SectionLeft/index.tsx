import { useEffect, useState } from 'react';
import { Button } from '../Button';

import { Container, Row } from './styles';

export function SectionLeft() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      return setIsMobile(true);
    }
    setIsMobile(false);
  }, []);

  return (
    <Container>
      <div className='container__principal'>
        <h2>
          Make {!isMobile && <br />}
          remote work
        </h2>
        <div className='container__content'>
          <p>
            Get your in sync, no matter your location. Sreamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <Button variant='solid'>Learn more</Button>
        </div>
      </div>
      <Row>
        <img src='/assets/client-databiz.svg' alt='databiz' />
        <img src='/assets/client-audiophile.svg' alt='audiophile' />
        <img src='/assets/client-meet.svg' alt='meet' />
        <img src='/assets/client-maker.svg' alt='maker' />
      </Row>
    </Container>
  );
}
