const Button = ({ children, onClick = () => {} }) => 
    (
        <button
            type="submit"
            style={{
                backgroundColor: "#b19cd9",
                color: "white",
                borderRadius: 8,
                padding: 10,
                margin: 10,
                width: "100%",
                fontWeight: "bold",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )

export default Button