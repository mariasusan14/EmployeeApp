import "./Select.css";
export const Select = ({
  tag,
  options,
  placeholder,
  value,
  onChange
}: {
  tag?: string;
  options: {option:string,value:string}[];
  placeholder: string;
  value?:string;
  onChange?:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
}) => {
       

  return (
    <div className="selectWrapper">
      {tag && <label>{tag}</label>}
      <select name={tag} value={value} onChange={onChange}>
        <option value="" selected disabled hidden>
          {placeholder}
        </option>
        <optgroup>
          {options.map((item) => (
            <option value={item.value}>{item.option}</option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};
