"use client";
import Footer from "../components/Footer";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = ["/slide1.png", "/loginBg.png"];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <main>
        {/* ================= HERO SLIDER ================= */}
        <section
          style={{
            position: "relative",
            height: "70vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                opacity: current === index ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              <Image
                src={slide}
                alt="Food Banner"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
              Delicious Food, Delivered Fast
            </h1>
            <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
              Fresh meals from your favorite restaurants
            </p>

            <Link
              href="/menu"
              style={{
                marginTop: "1.5rem",
                backgroundColor: "maroon",
                color: "white",
                padding: "0.8rem 2rem",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Order Now
            </Link>
          </div>
        </section>

        {/* ================= OFFER SECTION ================= */}
        <section
          style={{
            margin: "4rem auto",
            maxWidth: "1200px",
            padding: "0 1rem",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Background */}
            <Image
              src="/offerBg.png"
              alt="Offer Background"
              width={1200}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />

            {/* Content */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem",
                color: "white",
                flexWrap: "wrap",
              }}
            >
              {/* Text */}
              <div style={{ maxWidth: "500px" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>
                  Special Offer 🎉
                </h2>
                <p style={{ margin: "1rem 0", fontSize: "1.1rem" }}>
                  Get up to <strong>30% OFF</strong> on your first order.
                  Limited time only!
                </p>

                <Link
                  href="/menu"
                  style={{
                    backgroundColor: "white",
                    color: "maroon",
                    padding: "0.7rem 1.5rem",
                    borderRadius: "25px",
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                >
                  Grab the Deal
                </Link>
              </div>

              {/* Product Image */}

              <div>
                <Image
                  src="/p5.png"
                  alt="Offer Product 2"
                  width={300}
                  height={300}
                  style={{ objectFit: "contain" }}
                />
              </div>

            </div>
          </div>
        </section>
      </main >

      {/* Footer only on Home Page */}
      < Footer />
    </>
  );
}
