import mercadopago from "mercadopago";

// Configura el token de acceso
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export default mercadopago;