const Title = ({ children }) => {
  return (
    <h1
      style={{
        fontSize: "var(--font-size-large)",
        fontWeight: "bold",
        margin: "20px 0",
        color: "var(--primary-color)",
        letterSpacing: 2,
      }}
    >
      {children}
    </h1>
  );
};

export default Title;
