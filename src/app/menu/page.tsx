"use client";

import Image from "next/image";
import { useState } from "react";

type FoodItem = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const foodItems: FoodItem[] = [
    {
        id: 1,
        name: "Cheese Burger",
        price: 8.99,
        image: "/offerProduct.png",
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        price: 12.5,
        image: "/p8.png",
    },

    {
        id: 4,
        name: "Pasta",
        price: 4.99,
        image: "/p4.png",
    },

    {
        id: 5,
        name: " Veggie Supreme",
        price: 10.50,
        image: "/p3.png",

    },

    {
        id: 3,
        name: "Macaroni",
        price: 9.75,
        image: "/p7.png",
    },

    {
        id: 6,
        name: " Bacon Deluxe",
        price: 8.50,
        image: "/p2.png",
    },

    {
        id: 7,
        name: "Pesto Primavera",
        price: 17.50,
        image: "/p10.png",
    },

    {
        id: 8,
        name: "Cheesy Monster",
        price: 15.99,
        image: "/p9.png",
    },

];

export default function MenuPage() {
    const [addedId, setAddedId] = useState<number | null>(null);

    const addToCart = (item: FoodItem) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existing = cart.find((c: any) => c.id === item.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        setAddedId(item.id);
        setTimeout(() => setAddedId(null), 1000);
    };

    return (
        <main
            style={{
                maxWidth: "1200px",
                margin: "3rem auto",
                padding: "2rem 1rem",
                backgroundColor: "#F1ECE4",
                borderRadius: "20px",
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.8rem",
                    fontWeight: "800",
                    marginBottom: "2.5rem",
                    color: "orange",
                }}
            >
                Our Menu 🍽️
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "2rem",
                }}
            >
                {foodItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                            overflow: "hidden",
                            textAlign: "center",
                            paddingBottom: "1.5rem",
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={200}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                            }}
                        />

                        <h3 style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
                            {item.name}
                        </h3>

                        <p style={{ margin: "0.5rem 0", fontWeight: "700" }}>
                            ${item.price.toFixed(2)}
                        </p>

                        <button
                            onClick={() => addToCart(item)}
                            style={{
                                marginTop: "0.5rem",
                                backgroundColor:
                                    addedId === item.id ? "green" : "maroon",
                                color: "white",
                                border: "none",
                                padding: "0.6rem 1.5rem",
                                borderRadius: "25px",
                                cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            {addedId === item.id ? "Added ✓" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
