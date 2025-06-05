import "./Button.css";
export const Button = ({
  title,
  variant,
  className,
  onClick,
  disabled,
  type,
}: {
  title: string;
  variant: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
}) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${variant} ${className}`}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};
