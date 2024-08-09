/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "../actions";
import LogoPlain from "~/components/ui/Logos/LogoPlain";
import { useRouter } from "next/navigation";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type SignupInput = z.infer<typeof registerSchema>;

export default function Checkout() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // const onSubmit = async (data: SignupInput) => {
  //   setSuccess("Check your email for further instructions");
  //   const result = await signUp(data);
  //   if (result?.error) {
  //     setSuccess(null);
  //     setError(result.error);
  //   }
  // };

  // const form = useForm<SignupInput>({
  //   resolver: zodResolver(registerSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? "",
  );

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div className="flex flex-auto flex-col overflow-hidden font-sans lg:flex-row">
      <div className="absolute inset-x-0 top-0 overflow-hidden pl-[50%] bg-grid-black/[0.2] lg:left-[32rem] lg:pl-0 xl:left-[34rem]"></div>
      <div className="relative shrink-0 px-4 bg-grid-black/[0.05] lg:order-2 lg:min-w-0 lg:flex-1 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="mx-auto grid max-w-md grid-cols-1 lg:mx-0 lg:max-w-lg">
          <div className="relative py-10 lg:pt-24">
            <div className="absolute inset-y-0 left-1/2 -ml-[55vw] w-[110vw] bg-gradient-to-b from-white/100 shadow-neutral-900/5 lg:hidden"></div>
            <div className="relative">
              <a href="/">
                <svg
                  className="h-6 w-auto text-neutral-900 lg:hidden"
                  aria-hidden="true"
                  viewBox="0 0 160 24"
                  fill="none"
                >
                  <path
                    d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                    className="fill-primary"
                  ></path>
                  <path
                    d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div className="mt-10 flex space-x-3 lg:mt-0">
                <h1 className="text-base font-semibold leading-6 text-primary">
                  Course Access
                </h1>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <p className="text-4xl text-neutral-900">
                  $<span className="font-bold">1</span>
                  <span className="font-bold">4</span>
                  <span className="font-bold">9</span>
                </p>
                <p className="text-sm font-semibold text-neutral-500">
                  one-time payment
                </p>
              </div>
              <p className="mt-6 text-base leading-7 text-neutral-700">
                Includes access to 20+ lectures and resources available as part
                of my class, plus all future updates.
              </p>
              <p className="mt-6 text-sm leading-6 text-neutral-600">
                All prices in USD
              </p>
              <dl className="mt-16 hidden divide-y divide-neutral-900/5 text-base leading-6 text-neutral-700 lg:block">
                <div className="flex justify-between pb-4">
                  <dt>Subtotal</dt>
                  <dd className="font-semibold text-neutral-900">
                    $<span>1</span>
                    <span>4</span>
                    <span>9</span>.<span>0</span>
                    <span>0</span>
                  </dd>
                </div>
                <div className="flex justify-between py-4">
                  <dt>Taxes</dt>
                  <dd className="text-neutral-700">Calculated at next step</dd>
                </div>
                <div className="flex justify-between pt-4 font-semibold text-neutral-900">
                  <dt>Total price</dt>
                  <dd>
                    $<span>1</span>
                    <span>4</span>
                    <span>9</span>.<span>0</span>
                    <span>0</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-white/60 px-4 pb-28 pt-10 backdrop-blur lg:max-w-[34rem] lg:grow-0 lg:px-16 lg:shadow-2xl xl:px-20">
        <div className="mb-8 flex w-fit items-center justify-center bg-black p-2">
          <Link href="/">
            <LogoPlain className="h-8 w-8" />
          </Link>
        </div>
        <ul className="mt-8 hidden space-x-2 text-sm font-medium leading-6 text-neutral-700 lg:flex">
          <li className="flex font-semibold text-primary">
            Your details
            <svg
              aria-hidden="true"
              className="ml-2 h-6 w-6 stroke-neutral-500/40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.75 8.75 3.5 3.25-3.5 3.25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </li>
          <li className="">Payment</li>
        </ul>
        <section className="mx-auto max-w-md lg:mt-12 lg:max-w-sm">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout className="max-h-[80dvh]" />
          </EmbeddedCheckoutProvider>
        </section>
      </div>
    </div>
  );
}
