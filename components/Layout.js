import NavBar from "./NavBar";
import Footer from "./Footer";
import Seo from "./Seo";

import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Seo></Seo>
      <NavBar />
      <div>{children}</div>
      {/* {router.pathname !== "/" && <Footer />} */}
      <Footer />
    </>
  );
}
