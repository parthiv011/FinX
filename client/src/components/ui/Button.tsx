import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    type: 'submit' | 'reset'  | 'button';
    buttonTitle: string;
}

export function Button({type , buttonTitle, ...props} : ButtonProps) {
  return (
    <>
      <button type={type} {...props}
       className="bg-blue-600 mt-3 text-white rounded p-1"
      >{buttonTitle}</button>
    </>
  );
}
