import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { FRONTEND_URL } from "./config.js";
// import mercadopago from "./config/mercadopago.js";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import paymentRoutes from "./routes/payment.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL no está definido en las variables de entorno.");
}

// if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
//   throw new Error("El token de acceso de Mercado Pago no está configurado.");
// }

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

// Rutas
app.use("/api/payment", paymentRoutes);

// Si tienes más rutas, impórtalas y agrégalas aquí

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../my-portfolio-client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../../my-portfolio-client/dist/index.html")
    );
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