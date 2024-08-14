"use client";

import React, { useState } from "react";

import { LibraryBig, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { type User as UserType } from "@supabase/supabase-js";
import { createClient } from "~/utils/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ProfileButton: React.FC<{ user: UserType }> = ({ user }) => {
  const router = useRouter();
  const supabase = createClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer rounded-full border p-2 hover:bg-neutral-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 font-sans">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/lessons/introduction">
            <DropdownMenuItem>
              <LibraryBig className="mr-2 h-4 w-4" />
              <span>Lessons</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            signOut().then(() => {
              router.refresh();
            })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
