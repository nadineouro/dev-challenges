import Container from "components/Container";
import Image from "next/image";

function Home() {
  return (
    <Container>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "2%",
        }}
      >
        <section
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
          <h1
            style={{
              fontSize: 28,
              fontWeight: "bold",
              margin: "20px 0 40px",
              color: "var(--primary-color)",
              letterSpacing: 2,
            }}
          >
            EM CONSTRUÇÃO
          </h1>
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
        </section>
      </main>
    </Container>
  );
}

export default Home;
