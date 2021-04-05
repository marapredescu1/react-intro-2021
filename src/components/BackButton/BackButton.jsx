import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import styles from './BackButton.module.scss';

const BackButton = ({
  children = '< Back',
  className,
  ...rest
}) => {
  const history = useHistory();

  const onClick = () => {
    history.goBack();
  };

  return (
    history.length > 2 && (
    <Button
      {...rest}
      variant="outlined"
      className={[
        className,
        styles.BackButton,
      ].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {children}
    </Button>
    )
  );
};

export default BackButton;
