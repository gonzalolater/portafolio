import mercadopago from "mercadopago";
mercadopago.accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://<portfoliodb>:<NQk5yl1wsPPC067U>@cluster-portfoliodb.po8zqvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-portfoliodb";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";