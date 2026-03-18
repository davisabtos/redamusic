function CardEixo({ eixo, icone: Icone, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: eixo.cor_bg }}
      className="flex flex-col items-center justify-center text-center p-2 rounded-xl cursor-pointer aspect-square"
    >
      {/* Ícone com círculo */}
      <div
        style={{ backgroundColor: eixo.cor_icone }}
        className="flex items-center justify-center w-14 h-14 rounded-full mb-3"
      >
        {Icone && <Icone size={28} color="white" />}
      </div>

      {/* Nome */}
      <h3 className="text-white font-bold text-[14px]">{eixo.nome}</h3>

      {/* Descrição */}
      <p className="text-white/80 text-xs mt-1">{eixo.descricao}</p>
    </div>
  )
}

export default CardEixo