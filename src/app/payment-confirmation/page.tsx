import Link from "next/link";
import { Button } from "~/components/ui/button";
import LogoPlain from "~/components/ui/Logos/LogoPlain";
import { api } from "~/trpc/server";
import { stripe } from "~/utils/stripe";
import { createClient } from "~/utils/supabase/server";

async function getSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error) {
    return null;
  }
}

export default async function CheckoutReturnPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const sessionId = searchParams?.session_id;

  if (!sessionId || typeof sessionId !== "string") {
    return <p>Error: Something wrong!</p>;
  }
  const session = await getSession(sessionId);

  if (!session) {
    return <p>Error: Something wrong!</p>;
  }

  if (session?.status === "open") {
    return <p>Payment did not work.</p>;
  }

  if (session?.status === "complete") {
    try {
      await api.user.updateToPaid();
    } catch (error) {
      console.error("Error updating user to paid", error);
      return <p>Error: Something wrong!</p>;
    }
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-background py-32 font-sans">
        <LogoPlain className="h-16 w-16" />
        <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
        <h3 className="text-xl font-semibold">You have unlocked my course!</h3>
        <Link href="/lessons/introduction">
          <Button variant="outline">Start your chess journey &rarr;</Button>
        </Link>
      </div>
    );
  }

  return null;
}
