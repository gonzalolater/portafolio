// filepath: /workspaces/portafolio/my-portfolio-backend/src/config/mercadopago.js
import mercadopago from "mercadopago";
mercadopago.accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
export default mercadopago;