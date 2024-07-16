import React from "react";
import AuthComponent from "~/components/Layout/AuthComponent";
import Navbar from "~/components/Layout/Navbar";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Navbar authComponent={<AuthComponent />} />
      {children}
    </>
  );
};

export default RootLayout;
