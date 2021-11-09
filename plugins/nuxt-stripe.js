import {loadStripe} from '@stripe/stripe-js/pure';

// Stripe.js will not be loaded until `loadStripe` is called

export default async function ({ app, $config }, inject) {
  try {
    const stripe = await loadStripe($config.stripePublishableKey);
    inject('stripe', stripe);
  } catch (error) {
    console.error("failed to load the stripe JS SDK script", error);

  }
}
