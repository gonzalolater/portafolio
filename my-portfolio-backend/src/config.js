import mercadopago from "mercadopago";
mercadopago.accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://portfolio-db:db-asd123asd123@portfolio.jicyd2d.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";