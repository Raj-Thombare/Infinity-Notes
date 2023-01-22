import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bolder" }}
      >
        404 - Page Not Found
      </h1>
      <Link to="/">
        <button
          style={{
            fontSize: "1.1rem",
            padding: "15px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#4fbaf5",
          }}
        >
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
