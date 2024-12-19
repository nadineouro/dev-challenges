import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        lineHeight: "var(--line-height)",
        overflow: "hidden",
      }}
    >
      <Header />
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
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
