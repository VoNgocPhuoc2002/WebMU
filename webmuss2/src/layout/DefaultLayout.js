import React from "react";
import Header from "../features/header";
import Footer from "../features/footer";
import NavTop from "../features/navtop";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavTop />
      <div  className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
