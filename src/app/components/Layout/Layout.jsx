import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import PageTransition from "../ui/PageTransition";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--background)]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
