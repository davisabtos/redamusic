export default function Maintenance() {
  // Injeção de Keyframes CSS para manter o código limpo e funcional em arquivo único
  const animationStyles = `
    @keyframes gradientBg {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.15); }
    }
  `;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // Gradiente animado sutil usando suas cores escuras
        background: "linear-gradient(-45deg, #1a0533, #2d1b4e, #1a0533)",
        backgroundSize: "400% 400%",
        animation: "gradientBg 15s ease infinite",
        color: "#faf8ff",
        padding: "clamp(32px, 8vw, 64px)",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Injeta os keyframes no escopo do documento */}
      <style>{animationStyles}</style>

      {/* Topo: Indicador com pulsação suave */}
      <header 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "10px",
          animation: "fadeInUp 0.8s ease out forwards"
        }}
      >
        <span 
          style={{ 
            width: "8px", 
            height: "8px", 
            backgroundColor: "#f0b429", // Seu 'accent'
            borderRadius: "50%",
            display: "inline-block",
            animation: "pulse 2s infinite ease-in-out"
          }} 
        />
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "#ede9fe", opacity: 0.6, fontWeight: "500" }}>
          STATUS: ATUALIZANDO
        </span>
      </header>

      {/* Centro: Mensagem Principal com efeito de revelação gradual (Staggered Fade) */}
      <main style={{ maxWidth: "620px", margin: "auto 0" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            fontWeight: "400",
            lineHeight: "1.15",
            marginBottom: "24px",
            letterSpacing: "-0.01em",
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 0.2s forwards" // Delay de 0.2s
          }}
        >
          Estamos em <span style={{ color: "#6d28d9", position: "relative", display: "inline-block" }}>
            manutenção
            {/* Linha minimalista que surge embaixo da palavra 'manutenção' */}
            <span style={{
              position: "absolute",
              bottom: "2px",
              left: 0,
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, #6d28d9, transparent)",
              opacity: 0.5
            }}/>
          </span>.
        </h1>
        
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            lineHeight: "1.75",
            color: "#ede9fe", // Seu 'secondary'
            maxWidth: "480px",
            fontWeight: "300",
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 0.4s forwards" // Delay de 0.4s
          }}
        >
          O site está passando por uma reformulação para melhorar a experiência,
          a estrutura e o desempenho. Volte em breve.
        </p>
      </main>

      {/* Rodapé */}
      <footer 
        style={{ 
          fontSize: "0.8rem", 
          color: "#ede9fe", 
          opacity: 0, 
          animation: "fadeInUp 0.8s ease-out 0.6s forwards" 
        }}
      >
        &copy; {new Date().getFullYear()} Redamusic.
      </footer>
    </div>
  );
}