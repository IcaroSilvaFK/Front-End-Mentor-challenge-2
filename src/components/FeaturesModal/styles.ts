import styled from 'styled-components';

type IContainerProps = {
  isVisible: boolean;
};

export const Container = styled.ul<IContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};

  flex-direction: column;

  position: absolute;
  left: -40px;
  top: 20px;

  background: ${({ theme }) => theme.colors.almostWhite};

  padding: 8px 12px;
  gap: 12px;
  border-radius: 10px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  li {
    display: flex;
    gap: 4px;
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }
`;
