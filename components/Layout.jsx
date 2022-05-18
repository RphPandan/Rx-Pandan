import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

import { Container } from "@mui/material/";

function Layout({ children }) {
  const router = useRouter();
  const showNav = !router.pathname.includes("/login");
  return (
    <>
      <NavBar />
      <Container
        sx={{
          border: "1px solid red",
          height: "100vh",
          mt: 5,
          mb: 5,
        }}
      >
        {children}
      </Container>
    </>
  );
}

Layout.propTypes = {};

export default Layout;
