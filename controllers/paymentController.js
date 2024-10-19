import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";
export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100), // Amount in the smallest currency unit (e.g., paise for INR)
      currency: "INR",
    };

    // Create the order using Razorpay instance
    const order = await instance.orders.create(options);

    // Return success response
    res.status(200).json({
      success: true,
      order, // Include order details in the response if necessary
    });
  } catch (error) {
    // Handle any errors and respond with the appropriate error message
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message, // Optionally include the error message in the response
    });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  //console.log("sig received", razorpay_signature);
  //console.log("sig generated", expectedSignature);
  if (isAuthentic) {
    //Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    });
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  }
  else {
    res.status(400).json({
      sucess: false,

    });
  }
};
