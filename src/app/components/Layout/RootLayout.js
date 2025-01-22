import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      {/* Removed Google Analytics scripts */}

      {/* If you have other scripts or tracking codes, include them here */}

      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
