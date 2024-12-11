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
      {children}
      <Footer />
    </div>
  );
};

export default Container;
