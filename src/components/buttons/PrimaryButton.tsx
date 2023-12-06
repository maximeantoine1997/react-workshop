import React from 'react';
import Button, { ButtonProps } from './Button';

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`py-2 min-w-4 w-full text-white font-semibold bg-primary rounded-lg hover:bg-primary-hover transition-all ${props.className ?? ''}`}>
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
