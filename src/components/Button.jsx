function Button({ children, tipo = "default", clique }) {
  const types = {
    primary: "bg-blue-500 text-white", // sujeito a mudança
    secondary: "bg-gray-500 text-white", // sujeito a mudança
    danger: "bg-red-500 text-white", // sujeito a mudança
    success: "bg-green-500 text-white", // sujeito a mudança
    warning: "bg-yellow-500 text-white", // sujeito a mudança
    info: "bg-gray-300 text-black", // sujeito a mudança
    default: "bg-gray-500 text-white", // sujeito a mudança
    CTA: "bg-blue-500 text-white", // sujeito a mudança
  };

  const buttonClass = `${types[tipo] || types.default} text-base border-4 border-solid rounded-md px-2 py-1 my-2 flex items-center justify-center`;

  return (
    <button className={buttonClass} onClick={clique}>
      {children}
    </button>
  );
}

export default Button;
