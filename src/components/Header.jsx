import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-zinc-900 text-white px-4 py-3 shadow-sm">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl text-center font-bold cursor-pointer"
      >
        RedaMusic
      </h1>
    </header>
  );
}

export default Header;
