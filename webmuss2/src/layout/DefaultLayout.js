import React from "react";
import Header from "../features/header";
import Footer from "../features/footer";
import NavTop from "../features/navtop";
import './styles.scss';

const DefaultLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <NavTop />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
