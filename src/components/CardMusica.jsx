function CardMusica({ musica, eixos, onClick }) {
  const eixoPrincipal = eixos?.find((e) => e.ordem === 1);
  const corBg = eixoPrincipal?.eixos?.cor_bg || "#3b0764";

  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: corBg }}
      className="flex overflow-hidden cursor-pointer mb-4 mx-4 flex-row justify-center items-center px-2 py-1 rounded-lg shadow-lg"
    >
      {/* Imagem */}
      <img
        src={musica.capa}
        alt={musica.titulo}
        className="w-24 h-full object-cover aspect-square flex-shrink-0 rounded-lg shadow-lg"
      />

      {/* Conteúdo */}
      <div className="flex flex-col justify-between p-3 flex-1 ">
        <div>
          <h3 className="text-white font-bold text-base text-center">
            {musica.titulo}
          </h3>
          <p className="text-white/80 text-sm mt-1 text-center">
            {musica.autor}
          </p>
          <hr className="border-white/30 my-2" />

          {/* Tags de eixos */}
          <div className="flex flex-wrap gap-2">
            {eixos?.map((item) => (
              <span
                key={item.eixos?.id}
                className="text-[8px] px-3 py-1 rounded-full bg-white/20 text-white"
              >
                {item.eixos?.nome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMusica;
