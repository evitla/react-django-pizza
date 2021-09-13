import React from 'react';

import classNames from 'classnames';

const Button = ({ children, className, onClick, outline = false }: IButtonProps) => (
  <button
    className={classNames('button', className, { 'button--outline': outline })}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  outline?: boolean;
}
