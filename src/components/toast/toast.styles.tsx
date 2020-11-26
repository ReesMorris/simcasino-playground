import styled from 'styled-components';
import Text from '../text';

const Toast = styled.div`
  padding: 0.7rem 0.7rem 0.7rem 1.5rem;
  display: flex;
  background: #323232;
  align-items: center;
  border-radius: 0.4rem;
  min-width: 288px;
  margin-top: 0.4rem;
  transition: all 0.2s ease;

  &.enter,
  &.exit {
    transform: translateX(-600px);
    transition: all 300ms;
  }

  &.enter-active {
    transform: translateY(0);
  }
  &.exit-active {
    transform: translateX(-600px);
  }
`;

const ToastText = styled(Text)`
  flex-grow: 1;
  font-size: 1.4rem;
  color: #ffffff;
  margin: 0 0.4rem 0 0 !important;
`;

const CloseButton = styled.button`
  padding: 0.8rem;
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default { Toast, ToastText, CloseButton };
