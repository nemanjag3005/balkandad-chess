"use client";
import Link from "next/link";
import React, { useState } from "react";
import LogoPlain from "../ui/Logos/LogoPlain";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const routes: { title: string; href: string }[] = [
  { title: "Podcast", href: "/podcast" },
  { title: "Balkan Repertoires", href: "/balkan-repertoires" },
];

const newsletterSchema = z.object({
  email: z.string().email(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

const Navbar: React.FC<{
  authComponent: React.ReactNode;
}> = ({ authComponent }) => {
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
    <nav className="flex w-full items-center justify-center">
      <div className="grid w-full max-w-6xl grid-cols-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center bg-black p-2">
            <Link href="/">
              <LogoPlain className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <div className="col-span-7 flex items-center justify-end space-x-2 py-4 font-bold">
          <ul className="mr-4 hidden items-center justify-between space-x-6 font-sans text-xs uppercase md:flex">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <li className="nav w-[100%] py-1">{route.title}</li>
              </Link>
            ))}

            <Dialog>
              <DialogTrigger>
                <li className="nav py-1 uppercase">Newsletter</li>
              </DialogTrigger>
              <DialogContent className="font-sans">
                <DialogHeader>
                  <DialogTitle className="font-sans font-bold">
                    Newsletter
                  </DialogTitle>
                  <DialogDescription>
                    <p className="mt-4 font-sans text-sm text-neutral-500">
                      Subscribe to my newsletter to get the latest news and
                      updates from the chess world.
                    </p>
                  </DialogDescription>
                </DialogHeader>
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
                              className=""
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
              </DialogContent>
            </Dialog>
          </ul>
          {authComponent}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
