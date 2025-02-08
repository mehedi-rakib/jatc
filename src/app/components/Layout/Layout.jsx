import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import MenuHeader from "../Header/MenuHeader";
// import Preheader from "../Header/PreHeader";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Preheader /> */}
      <Navbar />
      {/* <MenuHeader /> */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
