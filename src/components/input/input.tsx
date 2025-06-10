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
  inputWrapperVariant,
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
  inputWrapperVariant?:string;
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
    
      <div className={`inputWrapper ${inputWrapperVariant}`}>
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
        min={0}
      />
   
      {endAdornment && endAdornment}
       </div>
    </div>
  );
};
