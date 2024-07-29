import React from "react";
import AuthComponent from "~/components/Layout/AuthComponent";
import Footer from "~/components/Layout/Footer";
import Navbar from "~/components/Layout/Navbar";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Navbar authComponent={<AuthComponent />} />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
