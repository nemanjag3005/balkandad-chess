/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// eslint-disable-next-line @typescript-eslint/no-var-requires
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");
