"use client";
import Menu from "./Menu";

import React from "react";

const Notification = () => {
    return (
        <div
            style={{
                backgroundColor: "maroon",
                color: "white",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.95rem",
            }}
        >
            Because great food should come easy. Free delivery for all orders over $50!
        </div>
    );
};

export default Notification;
