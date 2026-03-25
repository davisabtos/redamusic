import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import CardEixo from "../components/CardEixo";
import BackButton from "../components/BackButton";
import {
  BookOpen, Leaf, Scale, Heart,
  Palette, Users, Cpu, ShieldAlert,
} from "lucide-react";

const icones = {
  "educacao": BookOpen,
  "meio-ambiente": Leaf,
  "direitos-humanos": Scale,
  "saude": Heart,
  "cultura": Palette,
  "cidadania": Users,
  "tecnologia": Cpu,
  "violencia": ShieldAlert,
};

function Eixos() {
  const [eixos, setEixos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function buscarEixos() {
      const { data, error } = await supabase.from("eixos").select("*");
      if (error) console.error(error);
      else setEixos(data);
      setCarregando(false);
    }
    buscarEixos();
  }, []);

  return (
    <div className="min-h-screen bg-bg-light px-4 py-6">

      {/* Título */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute left-0">
          <BackButton />
        </div>
        <h1 className="text-xl font-bold text-bg-dark">Eixos Temáticos</h1>
      </div>

      <p className="text-center text-sm text-zinc-500 mb-6">
        Escolha um tema para explorar músicas relacionadas.
      </p>

      {carregando ? (
        <p className="text-center text-primary mt-10">Carregando eixos...</p>
      ) : eixos.length === 0 ? (
        <p className="text-center text-zinc-400 mt-10">
          Nenhum eixo disponível no momento.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {eixos.map((eixo) => (
            <CardEixo
              key={eixo.id}
              eixo={eixo}
              icone={icones[eixo.slug]}
              onClick={() => navigate(`/musicas/${eixo.slug}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Eixos;