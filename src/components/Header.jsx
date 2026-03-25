import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-bg-dark text-white px-4 py-3 shadow-sm">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl text-center font-bold cursor-pointer text-primary shadow-sm"
      >
        Reda<span className="text-accent">Music</span>
      </h1>
    </header>
  );
}

export default Header;