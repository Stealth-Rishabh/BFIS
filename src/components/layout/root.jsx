import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import FooterTwo from "../sections/footers/footerTwo";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterTwo />
    </>
  );
}
