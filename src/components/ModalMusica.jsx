import { useState } from "react";
import Modal from "./Modal";
import CloseButton from "./CloseButton";

const abas = ["Análise Crítica", "Atividade Pedagógica", "Outros"];

function ModalMusica({ musica, onClose }) {
  const [abaAtiva, setAbaAtiva] = useState("Análise Crítica");

  return (
    <Modal isOpen={!!musica} onClose={onClose}>
      {musica && (
        <div className="flex flex-col max-h-[90vh] overflow-y-auto p-4 bg-bg-light">
          <CloseButton clique={onClose} />

          <img
            src={musica.capa}
            alt={musica.titulo}
            className="w-full rounded-lg object-cover"
          />
          <h2 className="text-xl font-bold mt-3 text-bg-dark">
            {musica.titulo}
          </h2>
          <p className="text-sm text-zinc-500">{musica.autor}</p>

          <div className="flex gap-2 mt-4 border-b border-zinc-200">
            {abas.map((aba) => (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`pb-2 text-sm px-2 transition-colors ${
                  abaAtiva === aba
                    ? "font-bold border-b-2 border-primary text-primary"
                    : "text-zinc-400"
                }`}
              >
                {aba}
              </button>
            ))}
          </div>

          <div className="mt-4 text-sm text-zinc-700">
            {abaAtiva === "Análise Crítica" && (
              <p>
                {musica.explicacao ||
                  "Ainda não há análise crítica para esta música."}
              </p>
            )}
            {abaAtiva === "Atividade Pedagógica" && (
              <p>
                {musica.atividade_professor ||
                  "Ainda não há sugestão de atividade para esta música."}
              </p>
            )}
            {abaAtiva === "Outros" && (
              <div className="flex flex-col gap-3">
                {musica.audio_yt ? (
                  <a
                    href={musica.audio_yt}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline font-semibold"
                  >
                    Ouvir no YouTube
                  </a>
                ) : (
                  <span className="text-zinc-400">
                    Áudio não disponível no momento.
                  </span>
                )}
                {musica.letra_link ? (
                  <a
                    href={musica.letra_link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline font-semibold"
                  >
                    Ver letra completa
                  </a>
                ) : (
                  <span className="text-zinc-400">
                    Letra não disponível no momento.
                  </span>
                )}
              </div>
            )}
          </div>

          <CloseButton clique={onClose} />
        </div>
      )}
    </Modal>
  );
}

export default ModalMusica;
