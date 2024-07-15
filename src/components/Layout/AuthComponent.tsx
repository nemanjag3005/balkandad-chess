import React from "react";
import { createClient } from "~/utils/supabase/server";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import Link from "next/link";

const AuthComponent = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return data.user ? (
    <div>AuthComponent</div>
  ) : (
    <>
      <Link href="/login">
        <Button className="md:hidden" size="sm">
          Sign in
        </Button>
        <Button className="hidden md:block">Sign in</Button>
      </Link>
      <Sidebar />
    </>
  );
};

export default AuthComponent;
