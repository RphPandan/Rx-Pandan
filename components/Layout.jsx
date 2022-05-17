import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const showNav = !router.pathname.includes("/login");
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

Layout.propTypes = {};

export default Layout;
