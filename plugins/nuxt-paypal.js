import { loadScript } from "@paypal/paypal-js";

// Stripe.js will not be loaded until `loadStripe` is called
export default async function ({ app, $config }, inject) {
  try {
    const paypal = await loadScript({ "client-id": $config.paypalSandboxId });
    inject('paypal', paypal);
  } catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
  }
}

