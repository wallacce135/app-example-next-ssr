export const dynamic = "force-dynamic";

export default async function Home() {


  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "flex-start",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.75rem", fontWeight: 600 }}>
          Hello-world
      </h1>
      <p style={{ margin: 0, color: "#555", fontSize: "1rem" }}>
        Отрисовано на сервере (SSR).
      </p>
    </main>
  );
}
