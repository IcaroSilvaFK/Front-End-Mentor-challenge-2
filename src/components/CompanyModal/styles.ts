import styled from 'styled-components';

type ContainerProps = {
  isVisible: boolean;
};

export const Container = styled.ul<ContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};

  position: absolute;

  flex-direction: column;

  padding: 8px 12px;
  gap: 12px;

  background: ${({ theme }) => theme.colors.almostWhite};

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
  width: 100px;
  top: 20px;

  li {
    text-align: center;
    :hover {
      cursor: pointer;
    }
  }
`;
