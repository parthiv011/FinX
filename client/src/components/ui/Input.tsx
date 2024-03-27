import React from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password' | string;
  placeholder?: string;
}

export function Input({ type = 'text', placeholder, ...otherProps }: InputProps) {
  return (
    <input type={type} placeholder={placeholder} {...otherProps} 
    className="focus:outline-none border-b-2 mt-6"
    />
  );
}
