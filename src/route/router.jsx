import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Adjust path as needed

import Portfolio from "../pages/portfolio";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";
import ContactUs from "@/pages/contact-us";
import Services from "@/pages/services";
import ServiceDetails from "@/pages/service-details";
import Faq from "@/pages/faq";
import Root from "@/components/layout/root";
import HomeOne from "@/pages/home-1";

// About Section Pages
import AboutLayout from "@/components/sections/abouts/AboutLayout"; // Layout containing sidebar and breadcrumbs
import AboutUs from "@/components/sections/abouts/About";
import AboutMessage from "@/components/sections/abouts/AboutMessage";
import AboutValues from "@/components/sections/abouts/AboutValues";
import AboutSetUsApart from "@/components/sections/abouts/AboutSetUsApart";

// Sidebar links for About section
const aboutSidebarLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Our Values" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomeOne />,
      },
      {
        path: "/home",
        element: <HomeOne />, // Alternate path for Home
      },
      // About Section with Layout
      {
        path: "/about",
        element: <AboutLayout sidebarLinks={aboutSidebarLinks} />, // Wrap About section with AboutLayout
        children: [
          { path: "", element: <AboutUs /> }, // "/about" main page
          { path: "message", element: <AboutMessage /> }, // "/about/message" subpage
          { path: "values", element: <AboutValues /> }, // "/about/values" subpage
          { path: "set-us-apart", element: <AboutSetUsApart /> }, // "/about/set-us-apart" subpage
        ],
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);
