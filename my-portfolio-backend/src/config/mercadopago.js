import mercadopago from "mercadopago";

// Configura el token de acceso
mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

export default mercadopago;