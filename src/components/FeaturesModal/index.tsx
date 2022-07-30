import { Container } from './styles';

interface IFeaturesModal {
  isVisible: boolean;
  mouseLeave: () => void;
}

export function FeaturesModal({ isVisible, mouseLeave }: IFeaturesModal) {
  return (
    <Container isVisible={isVisible} onMouseLeave={mouseLeave}>
      <li>
        <img src='/assets/icon-todo.svg' alt='todo icon' />
        Todo List
      </li>
      <li>
        <img src='/assets/icon-calendar.svg' alt='calendar icon' />
        Calendar
      </li>
      <li>
        <img src='/assets/icon-reminders.svg' alt='reminders icon' />
        Reminders
      </li>
      <li>
        <img src='/assets/icon-planning.svg' alt='planning icon' />
        Planning
      </li>
    </Container>
  );
}
