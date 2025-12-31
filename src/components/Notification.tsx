"use client";
import Menu from "./Menu";

import React from "react";

const Notification = () => {
    return (
        <div
            style={{
                backgroundColor: "orange",
                color: "white",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.60rem",
            }}
        >
            Because great food should come easy. Free delivery for all orders over $50!
        </div>
    );
};

export default Notification;
