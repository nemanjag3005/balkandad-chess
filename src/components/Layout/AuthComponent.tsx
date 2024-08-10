import React from "react";
import { createClient } from "~/utils/supabase/server";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import ProfileButton from "./ProfileButton";

const AuthComponent = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user ? (
    <ProfileButton user={user} />
  ) : (
    <>
      <Link href="/login">
        <Button className="uppercase md:hidden" size="sm">
          Sign in
        </Button>
        <Button className="hidden text-xs font-bold uppercase md:block">
          Sign in
        </Button>
      </Link>
      <Sidebar />
    </>
  );
};

export default AuthComponent;
