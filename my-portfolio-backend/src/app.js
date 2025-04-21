import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taksRoutes from "./routes/tasks.routes.js";
import { FRONTEND_URL } from "./config.js";
import mercadopago from "mercadopago";

// Configura las credenciales de Mercado Pago
mercadopago.configure({
  access_token: "YOUR_ACCESS_TOKEN", // Reemplaza con tu Access Token de Mercado Pago
});

// Crea una preferencia de ejemplo
mercadopago.preferences
  .create({
    items: [
      {
        title: "Mi producto",
        quantity: 1,
        unit_price: 2000,
      },
    ],
  })
  .then((response) => {
    console.log("Preferencia creada:", response.body);
  })
  .catch((error) => {
    console.error("Error al crear la preferencia:", error);
  });

const app = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", taksRoutes);

if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html"));
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}

export default app;