import { Container } from './styles';

interface ICompanyProps {
  isVisible: boolean;
}

export function CompanyModal({ isVisible }: ICompanyProps) {
  return (
    <Container isVisible={isVisible}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </Container>
  );
}
