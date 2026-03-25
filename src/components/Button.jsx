function Button({ children, tipo = "default", clique }) {
  const types = {
    primary: "bg-primary text-white border-primary",
    secondary: "bg-surface-dark text-white border-surface-dark",
    danger: "bg-danger text-white border-danger",
    success: "bg-success text-white border-success",
    warning: "bg-warning text-white border-warning",
    info: "bg-info text-white border-info",
    default: "bg-surface-dark text-white border-surface-dark",
    CTA: "bg-accent text-white border-accent",
  };

  const buttonClass = `${types[tipo] || types.default} text-base border-2 border-solid rounded-lg px-4 py-2 my-2 flex items-center justify-center font-semibold`;

  return (
    <button className={buttonClass} onClick={clique}>
      {children}
    </button>
  );
}

export default Button;
