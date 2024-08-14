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
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-background py-32">
        <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
        <h3 className="text-xl font-semibold">You are now a pro user!</h3>
      </div>
    );
  }

  return null;
}
