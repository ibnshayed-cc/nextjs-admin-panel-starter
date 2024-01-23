"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Header() {
  const { data: session } = useSession();
  console.log("sesson",session?.user?.name)
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div className="w-[calc(100vw_-_280px)] flex justify-between items-center p-5 ">
      <div></div>
      <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  );
}

export default Header;
