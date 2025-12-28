"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // frontend-only for now
        console.log("Login Data:", { email, password });

        alert("Login successful (frontend only)");
    };

    return (
        <main
            style={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F1ECE4",
                padding: "1rem",
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    backgroundColor: "white",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "400px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: "800",
                        color: "maroon",
                        marginBottom: "1.5rem",
                    }}
                >
                    Login 🔐
                </h1>

                {/* Email */}
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontWeight: "600" }}>Email or Phone</label>
                    <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email or phone"
                        style={inputStyle}
                    />
                </div>

                {/* Password */}
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontWeight: "600" }}>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        style={inputStyle}
                    />
                </div>

                {/* Button */}
                <button type="submit" style={btnStyle}>
                    Login
                </button>

                {/* Extra */}
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "1rem",
                        fontSize: "0.9rem",
                    }}
                >
                    Don’t have an account?{" "}
                    <Link href="/signup" style={{ color: "maroon", fontWeight: "700" }}>
                        Sign up
                    </Link>
                </p>
            </form>
        </main>
    );
}

const inputStyle = {
    width: "100%",
    padding: "0.7rem",
    marginTop: "0.4rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
};

const btnStyle = {
    width: "100%",
    backgroundColor: "maroon",
    color: "white",
    padding: "0.8rem",
    borderRadius: "30px",
    border: "none",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
};
