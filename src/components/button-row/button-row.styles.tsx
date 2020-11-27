import styled from 'styled-components';
import Button from '../button/button';
import Icon from '../icon';
import Label from '../label';

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
`;

interface SmallButtonProps {
  pressed: boolean;
}
const SmallButton = styled(Button)<SmallButtonProps>`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(${props => (props.pressed && '0.8') || '1'});
`;

const ButtonLabel = styled(Label)`
  margin: 0 0 0 0.8rem;
`;

const TooltipContainer = styled.div``;
const Tooltip = styled(Icon)`
  font-size: 1rem;
  cursor: help;
  color: ${props => props.theme.colors.secondary};
`;

export default {
  ButtonRow,
  SmallButton,
  ButtonLabel,
  TooltipContainer,
  Tooltip
};
