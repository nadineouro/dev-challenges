const Footer = () => {
  return (
    <footer
      style={{
        fontSize: 8,
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "1% 2%",
      }}
    >
      <div>
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
      </div>
    </footer>
  );
};

export default Footer;
