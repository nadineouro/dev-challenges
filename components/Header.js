const Header = () => {
  return (
    <header
      style={{
        padding: "2%",
        letterSpacing: 2,
        fontWeight: "bold",
        width: "100%",
        height: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      dev<span style={{ color: "var(--primary-color)" }}>challenges</span>
    </header>
  );
};

export default Header;
