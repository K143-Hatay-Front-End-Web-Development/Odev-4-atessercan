import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Section>{children}</Section>
    </React.Fragment>
  );
};

export default Layout;
