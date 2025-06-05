import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  ref?: React.RefObject<HTMLButtonElement | null>;
  disabled?:boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  ref,
  children, 
  disabled,
  className = '',
  ...props 
}) => {
  return (
    <button 
      ref={ref}
      className={`button button--${variant} ${className}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 