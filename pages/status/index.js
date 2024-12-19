import Container from "components/Container";
import Title from "components/Title";
import Image from "next/image";
import useSWR from "swr";

async function fetchApi(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <Container>
      <Image
        src="/images/status-update.png"
        alt="Imagem de barreira de trânsito"
        width={256}
        height={256}
      />
      <Title>STATUS</Title>
      <UpdatedAt />
      <DatabaseStatus />
    </Container>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";
  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation = "Carregando...";

  if (!isLoading && data) {
    databaseStatusInformation = (
      <>
        <div>Versão: {data.dependencies.database.version}</div>
        <div>
          Conexões abertas: {data.dependencies.database.opened_connections}
        </div>
        <div>
          Conexões máximas: {data.dependencies.database.max_connections}
        </div>
      </>
    );
  }

  return (
    <div
      style={{
        borderRadius: "5px",
        margin: "20px 0",
      }}
    >
      <h2
        style={{
          fontSize: "var(--font-size-medium)",
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        DATABASE
      </h2>
      <div>{databaseStatusInformation}</div>
    </div>
  );
}
