import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { FRONTEND_URL } from "./config.js";
import mercadopago from "./config/mercadopago.js";
import fs from "fs";
import path from "path";

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL no está definido en las variables de entorno.");
}

if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
  throw new Error("El token de acceso de Mercado Pago no está configurado.");
}

// Configura las credenciales de Mercado Pago
mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

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

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(cookieParser());
app.use(helmet());

const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  const route = require(`./routes/${file}`);
  app.use(`/api/${file.split(".")[0]}`, route);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
} else {
  console.log("Modo desarrollo activado");
}

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;