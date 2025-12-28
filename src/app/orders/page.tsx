"use client";

type OrderStatus = "Pending" | "Delivered" | "Cancelled";

type Order = {
    id: string;
    date: string;
    total: number;
    status: OrderStatus;
    items: string[];
};

const orders: Order[] = [
    {
        id: "ORD-1023",
        date: "March 12, 2025",
        total: 24.99,
        status: "Delivered",
        items: ["Cheese Burger", "French Fries"],
    },
    {
        id: "ORD-1024",
        date: "March 18, 2025",
        total: 18.5,
        status: "Pending",
        items: ["Pepperoni Pizza"],
    },
    {
        id: "ORD-1025",
        date: "March 20, 2025",
        total: 12.75,
        status: "Cancelled",
        items: ["Fried Chicken"],
    },
];

export default function OrdersPage() {
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
                Your Orders 📦
            </h1>

            {orders.length === 0 ? (
                <p style={{ textAlign: "center" }}>
                    You haven’t placed any orders yet.
                </p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order.id}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            marginBottom: "1.5rem",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                        }}
                    >
                        {/* Top Row */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "0.5rem",
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: "1.2rem" }}>{order.id}</h3>
                                <p style={{ fontSize: "0.9rem", color: "#555" }}>
                                    {order.date}
                                </p>
                            </div>

                            <span
                                style={{
                                    padding: "0.4rem 1rem",
                                    borderRadius: "20px",
                                    fontSize: "0.85rem",
                                    fontWeight: "700",
                                    color: "white",
                                    backgroundColor:
                                        order.status === "Delivered"
                                            ? "green"
                                            : order.status === "Pending"
                                                ? "orange"
                                                : "crimson",
                                }}
                            >
                                {order.status}
                            </span>
                        </div>

                        {/* Items */}
                        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
                            {order.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        {/* Total */}
                        <div
                            style={{
                                marginTop: "1rem",
                                textAlign: "right",
                                fontWeight: "700",
                            }}
                        >
                            Total: ${order.total.toFixed(2)}
                        </div>
                    </div>
                ))
            )}
        </main>
    );
}
