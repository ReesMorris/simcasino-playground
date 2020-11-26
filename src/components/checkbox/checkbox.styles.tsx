import styled, { css } from 'styled-components';
import Icon from '../icon';
import Label from '../label';

const CheckboxWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin: 0 0 0 0.8rem;
`;

const CheckboxContainer = styled.div`
  position: relative;
  min-width: 3rem;
  min-height: 3rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.ui.border};
  background: transparent;
  border-radius: 0.3rem;
  transition: all 0.2s ease;
  margin: 0;
  cursor: pointer;

  ${props =>
    props.checked &&
    css`
      background: ${props.theme.ui.active_background};
      border: 1px solid ${props => props.theme.ui.active_background};
    `}

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.ui.active_background};
  }
`;

interface CheckboxIconProps {
  visible: boolean;
}
const CheckboxIcon = styled(Icon)<CheckboxIconProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem;
  color: ${props => props.theme.ui.active_text};
  transition: opacity 0.2s ease;
  opacity: ${props => (props.visible && '1') || '0'};
  pointer-events: none;
`;

const TooltipContainer = styled.div``;
const Tooltip = styled(Icon)`
  font-size: 1rem;
  cursor: help;
  color: ${props => props.theme.colors.secondary};
`;

export default {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxContainer,
  CheckboxIcon,
  Checkbox,
  TooltipContainer,
  Tooltip
};
