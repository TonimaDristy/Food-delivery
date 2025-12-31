import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#F1ECE4",
                padding: "3rem 1rem",
                textAlign: "center",
                marginTop: "3rem",
                borderTop: "1px solid #ddd",
            }}
        >
            {/* Logo or Brand */}
            <h2
                style={{
                    color: "maroon",
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    marginBottom: "1rem",
                }}
            >
                Delicious Food
            </h2>

            {/* Social Icons */}
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a href="#" style={{ color: "maroon", fontSize: "1.2rem" }}><FaFacebookF /></a>
                <a href="#" style={{ color: "maroon", fontSize: "1.2rem" }}><FaTwitter /></a>
                <a href="#" style={{ color: "maroon", fontSize: "1.2rem" }}><FaInstagram /></a>
            </div>

            {/* Footer Text */}
            <p style={{ color: "#555", marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                © {new Date().getFullYear()} Delicious Food Delivery. All rights reserved.
            </p>
            <p style={{ color: "#777", fontSize: "0.85rem" }}>
                Serving happiness🍕

            </p>
        </footer>
    );
}
