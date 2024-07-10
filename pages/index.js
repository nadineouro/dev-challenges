import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#1e1e1e",
        color: "#dbdbdb",
        fontFamily: "sans-serif",
        lineHeight: 1.4,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "2%",
        }}
      >
        <header style={{ letterSpacing: 2, fontWeight: "bold", width: "100%" }}>
          dev<span style={{ color: "#7737ed" }}>challenges</span>
        </header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 10%",
            maxWidth: 1000,
            overflowY: "auto",
            textAlign: "justify",
            padding: "20px 0 40px",
          }}
        >
          <Image
            src="/images/traffic-barrier.png"
            alt="Imagem de barreira de trânsito"
            width={256}
            height={256}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: "bold",
              margin: "20px 0 40px",
              color: "#7737ed",
              letterSpacing: 2,
            }}
          >
            EM CONSTRUÇÃO
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p>
              Oie, desenvolvedor(a)! Você já se perguntou o que esperar dos
              desafios técnicos aplicados nos processos seletivos das empresas?
              Não se preocupe, estamos aqui para ajudar!
            </p>
            <p>
              Este será o lugar ideal para compartilhar desafios reais que estão
              sendo propostos durante a seleção para vagas de desenvolvedores ao
              redor do mundo. Aqui, você poderá se preparar para diferentes
              tipos de testes e entrevistas, oferecendo insights valiosos sobre
              o que esperar durante sua jornada na busca por oportunidades
              profissionais na área de desenvolvimento.
            </p>
            <p>
              Em breve, estaremos prontos para receber suas contribuições.
              Continue codando e desafiando seus limites!
            </p>
          </div>
        </div>
      </div>
      <footer
        style={{
          fontSize: 8,
          position: "absolute",
          bottom: "2%",
          right: "2%",
        }}
      >
        Icons made by{" "}
        <a
          style={{ color: "inherit" }}
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          style={{ color: "inherit" }}
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
}

export default Home;
