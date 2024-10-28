import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../sections/footers/FooterTwo";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
