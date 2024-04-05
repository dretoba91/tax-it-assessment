

const Button = ({ onClick, children, color, size, disabled = false }) => {
  
  return (
    <Button className={disabled} onClick={onClick} color={color} size={size}>
      {children}
    </Button>
  );
};

export default Button;
