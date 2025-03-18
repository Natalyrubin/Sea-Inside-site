import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - הדף לא נמצא</h1>
            <Link to="/" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#007bff", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
                חזור לדף הבית
            </Link>
        </div>
    );
}
