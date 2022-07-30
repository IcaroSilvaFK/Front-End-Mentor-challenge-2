import { Container } from './styles';

interface ICompanyProps {
  isVisible: boolean;
  mouseLeave: () => void;
}

export function CompanyModal({ isVisible, mouseLeave }: ICompanyProps) {
  return (
    <Container isVisible={isVisible} onMouseLeave={mouseLeave}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </Container>
  );
}
