import express from "express";
import mercadopago from "../config/mercadopago.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payment_data = {
      transaction_amount: req.body.transaction_amount,
      token: req.body.token,
      description: req.body.description,
      installments: Number(req.body.installments),
      payment_method_id: req.body.paymentMethodId,
      issuer_id: req.body.issuer,
      payer: {
        email: req.body.payer.email,
        identification: {
          type: req.body.payer.docType,
          number: req.body.payer.docNumber,
        },
      },
    };

    const response = await mercadopago.payment.create(payment_data);
    return res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id,
    });
  } catch (err) {
    console.error("Payment error:", err);
    return res.status(500).json({
      error: "An error occurred while processing the payment",
      details: err,
    });
  }
});

export default router;