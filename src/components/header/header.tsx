import "./header.css";
const Header = ({
  title,
  className,
  endAdornment,
  image,
}: {
  title?: string;
  className: string;
  endAdornment?: React.ReactNode;
  image?: React.ReactNode;
}) => {
  return (
    <div className={className}>
      {image && image}
      <div className="title">{title}</div>

      {endAdornment && endAdornment}
    </div>
  );
};

export default Header;
