import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import ModalMusica from "../components/ModalMusica";
import CardMusica from "../components/CardMusica";
import BackButton from "../components/BackButton";

function Musicas() {
  const { slug } = useParams();
  const [musicas, setMusicas] = useState([]);
  const [nomeEixo, setNomeEixo] = useState("");
  const [musicaSelecionada, setMusicaSelecionada] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarMusicas() {
      const { data: eixo } = await supabase
        .from("eixos")
        .select("id, nome")
        .eq("slug", slug)
        .single();

      setNomeEixo(eixo.nome);

      const { data: relacoes, error } = await supabase
        .from("musicas_eixos")
        .select("musicas(*)")
        .eq("eixo_id", eixo.id);

      if (error) {
        console.error(error);
        setCarregando(false);
        return;
      }

      const musicaIds = relacoes.map((r) => r.musicas.id);

      const { data: todosEixos } = await supabase
        .from("musicas_eixos")
        .select("musica_id, eixos(id, nome, cor_bg), ordem")
        .in("musica_id", musicaIds);

      const agrupado = {};
      relacoes.forEach((r) => {
        agrupado[r.musicas.id] = { ...r.musicas, eixos: [] };
      });
      todosEixos.forEach((item) => {
        agrupado[item.musica_id].eixos.push({
          eixos: item.eixos,
          ordem: item.ordem,
        });
      });

      setMusicas(Object.values(agrupado));
      setCarregando(false);
    }
    buscarMusicas();
  }, [slug]);

  return (
    <div className="min-h-screen bg-bg-light px-4 py-6">
      {/* Título */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute left-0">
          <BackButton />
        </div>
        <h1 className="text-xl font-bold text-bg-dark">
          {nomeEixo || "Músicas"}
        </h1>
      </div>

      <p className="text-center text-sm text-zinc-500 mb-6">
        Explore as músicas relacionadas a este tema.
      </p>

      {/* Estados */}
      {carregando ? (
        <p className="text-center text-primary mt-10">Carregando músicas...</p>
      ) : musicas.length === 0 ? (
        <p className="text-center text-zinc-400 mt-10">
          Nenhuma música disponível para o eixo "{nomeEixo}" no momento.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {musicas.map((musica) => (
            <CardMusica
              key={musica.id}
              musica={musica}
              eixos={musica.eixos}
              onClick={() => setMusicaSelecionada(musica)}
            />
          ))}
        </div>
      )}

      <ModalMusica
        musica={musicaSelecionada}
        onClose={() => setMusicaSelecionada(null)}
      />
    </div>
  );
}

export default Musicas;
