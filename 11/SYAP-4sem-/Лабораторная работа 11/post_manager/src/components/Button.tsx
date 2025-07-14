interface ButtonProps {
    func: () => void;
    title: string;
    className?: string;  // добавляем опциональный пропс
  }
  
  function Button({ func, title, className }: ButtonProps) {
    return (
      <button onClick={func} className={`px-3 py-1 rounded ${className}`}>
        {title}
      </button>
    );
  }
  
  export default Button;
  