import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }: { lineItems: LineItem[] }) {
  let stripePromise: Promise<Stripe | null>;
  const getStripe = () => {
    if (!stripePromise) {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      if (!apiKey) {
        throw new Error("NEXT_PUBLIC_API_KEY is not defined");
      }
      stripePromise = loadStripe(apiKey);
    }
    return stripePromise;
  };
  const stripe = await getStripe();
  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/payment-success`,
    cancelUrl: window.location.origin,
  });
}

interface LineItem {
  price: string;
  quantity: 1;
}
