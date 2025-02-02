import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import Preheader from "../Header/PreHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <Preheader />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
