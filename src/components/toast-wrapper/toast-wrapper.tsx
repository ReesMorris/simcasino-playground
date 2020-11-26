import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ApplicationState } from '../../redux/root-reducer';
import Toast from '../toast/toast';
import Styles from './toast-wrapper.styles';

const ToastWrapper = () => {
  const { toast } = useSelector((state: ApplicationState) => state);

  return (
    <Styles.ToastWrapper>
      <TransitionGroup>
        {toast.messages.map(toast => (
          <CSSTransition key={toast.id} timeout={300}>
            <Toast data={toast} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Styles.ToastWrapper>
  );
};

export default ToastWrapper;
