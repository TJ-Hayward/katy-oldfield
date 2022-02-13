import React, { Children } from "react";
import Navbar from "./Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
