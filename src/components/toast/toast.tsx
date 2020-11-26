import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../../redux/toast/actions';
import { IToast } from '../../redux/toast/types';
import Icon from '../icon';
import Styles from './toast.styles';

interface ToastProps {
  data: IToast;
}

const Toast = ({ data }: ToastProps) => {
  const dispatch = useDispatch();
  const clearToast = () => dispatch(removeToast(data.id));

  useEffect(() => {
    setTimeout(() => {
      clearToast();
    }, 3000);
  }, []);

  return (
    <Styles.Toast role='alert'>
      <Styles.ToastText>{data.message}</Styles.ToastText>
      <Styles.CloseButton onClick={clearToast}>
        <Icon icon='times' title='Close' />
      </Styles.CloseButton>
    </Styles.Toast>
  );
};

export default Toast;
