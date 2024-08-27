"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

const Footer = () => {
  const form = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: NewsletterInput) => {
    console.log(data);
  };
  return (
    <div className="">
      <div className="flex items-center justify-center bg-neutral-100">
        <div className="flex max-w-6xl flex-col items-center px-4 py-10 md:px-10 lg:flex-row lg:space-x-16">
          <div>
            <div className="relative h-24 w-full">
              <Image
                src="/logo-text.svg"
                alt="logo"
                className="object-contain"
                fill
              />
            </div>
            <p className="mt-4 text-center font-sans text-sm text-neutral-500">
              Maximus tempor nec morbi parturient malesuada. Congue vitae
              lobortis suspendisse nostra nullam et sociosqu purus letius
              litora.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <a href="/" target="_blank" className="bg-black p-2">
                <FaFacebook className="h-4 w-4 fill-white" />
              </a>
              <a href="/" target="_blank" className="bg-black p-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-base font-medium tracking-tight text-white"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lazarvilotiijevic/"
                target="_blank"
                className="bg-black p-2"
              >
                <FaInstagram className="h-4 w-4 fill-white" />
              </a>
              <a
                href="https://www.youtube.com/@BalkanDadChess"
                target="_blank"
                className="bg-black p-2"
              >
                <FaYoutube className="h-4 w-4 fill-white" />
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:grid md:grid-cols-2 lg:mt-0 lg:gap-10">
            <div className="grid grid-cols-2">
              <div>
                <h4 className="font-sans text-sm font-bold uppercase text-primary">
                  links
                </h4>
                <ul className="mt-4 flex flex-col space-y-2 text-sm">
                  <Link href="/" className="font-sans text-neutral-500">
                    Home
                  </Link>
                  <Link href="/podcast" className="font-sans text-neutral-500">
                    Podcast
                  </Link>
                  <Link
                    href="/balkan-repertoires"
                    className="font-sans text-neutral-500"
                  >
                    Balkan Repertoires
                  </Link>
                  <Link href="/course" className="font-sans text-neutral-500">
                    Enroll
                  </Link>
                </ul>
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold uppercase text-primary">
                  contact
                </h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="font-sans text-neutral-500">
                    +1 (210) 560-5487
                  </li>
                  <li className="font-sans text-neutral-500"></li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col md:mt-0">
              <h4 className="font-sans font-bold">Newsletter</h4>
              <p className="mt-4 font-sans text-sm text-neutral-500">
                Subscribe to my newsletter to get the latest news and updates
                from the chess world.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="on"
                            className="mt-4"
                            placeholder="Email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="mt-4 w-full bg-black text-xs uppercase text-white hover:bg-black/80"
                  >
                    Sign up
                  </Button>
                  {error && (
                    <div className="mb-3 mt-1 rounded-md border border-destructive bg-destructive/10 p-3">
                      <p className="text-center text-sm font-medium text-destructive">
                        {error}
                      </p>
                    </div>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#1b1b1b] px-4 py-8">
        <p className="font-sans text-xs text-neutral-300">
          Copyright © {new Date().getFullYear()} BalkanDad Chess, All rights
          reserved. Presented by{" "}
          <a href="https://www.wearelandigital.com" target="_blank">
            LAN Digital
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
