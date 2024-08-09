/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { stripe } from "~/utils/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded", // embedded = no external routing
      line_items: [
        {
          // this is the product price id from stripe
          price: "price_1PkSYCP8Nq56tmXl7F2kYHs6",
          quantity: 1,
        },
      ],
      //   payment_method_types: ["card"],
      mode: "payment",
      automatic_tax: { enabled: true },
      return_url: `${request.headers.get(
        "origin",
      )}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });
  } catch (err) {
    return Response.json(err, {
      status: 400,
    });
  }
}
