"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    // Update localStorage
    const updateCart = (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const increaseQty = (id: number) => {
        const updated = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        updateCart(updated);
    };

    const decreaseQty = (id: number) => {
        const updated = cart
            .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        updateCart(updated);
    };

    const removeItem = (id: number) => {
        const updated = cart.filter((item) => item.id !== id);
        updateCart(updated);
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <main
            style={{
                maxWidth: "1100px",
                margin: "3rem auto",
                padding: "2rem",
                backgroundColor: "#F1ECE4",
                borderRadius: "20px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "maroon",
                    marginBottom: "2rem",
                }}
            >
                Your Cart 🛒
            </h1>

            {cart.length === 0 ? (
                <div style={{ textAlign: "center" }}>
                    <p style={{ marginBottom: "1rem" }}>Your cart is empty.</p>
                    <Link
                        href="/menu"
                        style={{
                            backgroundColor: "maroon",
                            color: "white",
                            padding: "0.6rem 1.5rem",
                            borderRadius: "25px",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Go to Menu
                    </Link>
                </div>
            ) : (
                <>
                    {/* Cart Items */}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: "white",
                                borderRadius: "15px",
                                padding: "1rem",
                                marginBottom: "1rem",
                                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                                flexWrap: "wrap",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    style={{ borderRadius: "10px", objectFit: "cover" }}
                                />

                                <div>
                                    <h3 style={{ fontSize: "1.1rem" }}>{item.name}</h3>
                                    <p style={{ fontWeight: "600" }}>
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    style={qtyBtn}
                                >
                                    −
                                </button>

                                <span style={{ minWidth: "20px", textAlign: "center" }}>
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() => increaseQty(item.id)}
                                    style={qtyBtn}
                                >
                                    +
                                </button>
                            </div>

                            {/* Remove */}
                            <button
                                onClick={() => removeItem(item.id)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "maroon",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total */}
                    <div
                        style={{
                            marginTop: "2rem",
                            textAlign: "right",
                            fontSize: "1.3rem",
                            fontWeight: "700",
                        }}
                    >
                        Total: ${totalPrice.toFixed(2)}
                    </div>

                    {/* Checkout */}
                    <div style={{ textAlign: "right", marginTop: "1rem" }}>
                        <button
                            style={{
                                backgroundColor: "maroon",
                                color: "white",
                                padding: "0.8rem 2rem",
                                borderRadius: "30px",
                                border: "none",
                                fontSize: "1rem",
                                fontWeight: "700",
                                cursor: "pointer",
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </main>
    );
}

const qtyBtn = {
    backgroundColor: "maroon",
    color: "white",
    border: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    cursor: "pointer",
    fontWeight: "700",
};
