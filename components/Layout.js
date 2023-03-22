import NavBar from "./NavBar";
import Footer from "./Footer";
import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <>
      <Seo></Seo>
      <NavBar />
      <div>{children}</div>
      <Footer/>
    </>
  );
}
