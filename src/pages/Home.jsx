import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import ModalMusica from "../components/ModalMusica";
import Button from "../components/Button";
import { Search, Music, BookOpen } from "lucide-react";

const passos = [
  {
    num: "1",
    icone: Search,
    titulo: "Selecione um tema",
    desc: "Escolha um eixo temático como saúde, cidadania ou meio ambiente.",
  },
  {
    num: "2",
    icone: Music,
    titulo: "Escolha uma música",
    desc: "Veja as músicas relacionadas ao tema que você escolheu.",
  },
  {
    num: "3",
    icone: BookOpen,
    titulo: "Leia o mundo por ela",
    desc: "Explore a análise crítica e os temas que a música carrega.",
  },
]

function Home() {
  const navigate = useNavigate();
  const [destaques, setDestaques] = useState([]);
  const [musicaSelecionada, setMusicaSelecionada] = useState(null);

  useEffect(() => {
    async function buscarDestaques() {
      const { data, error } = await supabase
        .from("musicas")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(8);

      if (error) console.error(error);
      else setDestaques(data);
    }
    buscarDestaques();
  }, []);

  return (
    <div>
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center text-center py-14 px-6 bg-zinc-900">
        <h1 className="text-3xl font-bold text-white">Bem-vindo ao RedaMusic</h1>
        <p className="text-sm italic text-zinc-400 mt-2">
          Descubra o que a música que você ouve tem a dizer sobre o mundo
        </p>
        <Button tipo="CTA" clique={() => navigate("/eixos")}>
          Explorar músicas
        </Button>
      </section>

      {/* Seção Como Funciona */}
      <section className="w-full px-6 py-8 bg-zinc-50">
        <h2 className="text-2xl font-bold mb-6">Como Funciona</h2>
        <div className="flex flex-col gap-4">
          {passos.map((item) => {
            const Icone = item.icone
            return (
              <div
                key={item.num}
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="bg-zinc-100 rounded-full p-2 flex-shrink-0">
                  <Icone size={20} className="text-zinc-600" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-800">{item.titulo}</h3>
                  <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Seção Músicas em Destaque */}
      <section className="w-full py-8">
        <h2 className="text-2xl font-bold text-center mb-6 px-4">
          Músicas em destaque
        </h2>
        <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar">
          {destaques.map((musica) => (
            <div
              key={musica.id}
              className="flex flex-col flex-shrink-0 w-[38vw] max-w-[140px] cursor-pointer"
              onClick={() => setMusicaSelecionada(musica)}
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src={musica.capa}
                  alt={musica.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs font-bold text-zinc-800 mt-2 line-clamp-2 leading-tight">
                {musica.titulo}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 truncate">
                {musica.autor}
              </p>
            </div>
          ))}
        </div>
        {musicaSelecionada && (
          <ModalMusica
            isOpen={true}
            onClose={() => setMusicaSelecionada(null)}
            musica={musicaSelecionada}
          />
        )}
      </section>

      {/* Seção 4 — Chamada final */}
      <section className="flex flex-col items-center text-center py-10 px-6 bg-zinc-700">
        <h2 className="text-2xl font-bold text-white">
          Pronto para ler o mundo pela música?
        </h2>
        <p className="text-sm italic text-zinc-400 mt-2">
          Explore todos os eixos temáticos e descubra o que as músicas têm a dizer.
        </p>
        <Button tipo="CTA" clique={() => navigate("/eixos")}>
          Ver todos os eixos
        </Button>
      </section>
    </div>
  );
}

export default Home;