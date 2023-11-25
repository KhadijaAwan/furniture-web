import Support from "./Support";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Support />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
