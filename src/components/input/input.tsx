import type React from "react";
import "./input.css";
export const Input = ({
  tag,
  type,
  name,
  placeholder,
  value,
  onChange,
  endAdornment,
  className,
  id,
  checked,
  disabled=false,
  //required,
  ref
}: {
  tag?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?:React.RefObject<HTMLInputElement | null>;
  endAdornment?:React.ReactNode;
  className?:string;
  id?:string;
  checked?:boolean
  disabled?:boolean
  //required?:boolean
}) => {
  return (
    
      <div className="inputWrapper">
      {tag && <label>{tag}</label>}
      <div className="wrapper">
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        id={id}
        aria-label={name}
        checked={checked}
        disabled={disabled}
        required
      />
   
      {endAdornment && endAdornment}
       </div>
    </div>
  );
};
