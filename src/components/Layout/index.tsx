import Navbar from "./HeadBar";
import Footer from "./Footer";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="container-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
