import React from "react";
import "./layout.scss";
import Nav from "../nav/nav";

const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
