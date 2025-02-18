import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import MenuHeader from "../Header/MenuHeader";
// import LanguageSwitcher from "../Header/LanguageSwitcher";
// import Preheader from "../Header/PreHeader";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <LanguageSwitcher /> */}
      <Navbar />
      {/* <MenuHeader /> */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
