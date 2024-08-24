// import type { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";
// import getRawBody from "raw-body";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2024-06-20",
// });

// const endpointSecret = process.env.WEBHOOK_SECRET as string;

// // Make sure to add this, otherwise you will get a stream.not.readable error
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     console.log("req.headers", req.headers);
//     if (req.method !== "POST")
//       return res.status(405).send("Only POST requests allowed");

//     const sig: any = req.headers["stripe-signature"];
//     const rawBody = await getRawBody(req);

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
//     } catch (err: any) {
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     console.log("event.type", JSON.stringify(event.type));

//     if (event.type === "checkout.session.completed") {
//       const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//         (event.data.object as any).id,
//         {
//           expand: ["line_items"],
//         }
//       );
//       const lineItems = sessionWithLineItems.line_items;

//       if (!lineItems) return res.status(500).send("Internal Server Error");

//       try {
//         // Save the data, change customer account info, etc
//         console.log("Fullfill the order with custom logic");
//         console.log("data", lineItems.data);
//         console.log(
//           "customer email",
//           (event.data.object as any).customer_details.email
//         );
//         console.log("created", (event.data.object as any).created);
//       } catch (error) {
//         console.log("Handling when you're unable to save an order");
//       }
//     }

//     res.status(200).end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json("Internal Server Error");
//   }
// }

import { Stripe } from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("Event", event?.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created

    // console.log(
    //   res?.data?.object?.billing_details?.email, // email
    //   res?.data?.object?.amount, // amount
    //   JSON.stringify(res), // payment info
    //   res?.type, // type
    //   String(timeString), // time
    //   String(dateTime), // date
    //   res?.data?.object?.receipt_email, // email
    //   res?.data?.object?.receipt_url, // url
    //   JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
    //   JSON.stringify(res?.data?.object?.billing_details), // Billing details
    //   res?.data?.object?.currency // Currency
    // );
    const resp = res?.data?.object;
    console.log(resp);
    const { data: d, error } = await supabase.from("orders").insert({
      id: resp.id,
      amount: resp.amount,
      email: resp.billing_details.email,
      name: resp.billing_details.name,
      status: resp.status,
      receipt_url: resp.receipt_url,
    });

    return NextResponse.json({
      status: "sucess",
      event: event.type,
      response: res,
    });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
