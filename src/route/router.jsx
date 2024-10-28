import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Adjust path as needed

import Portfolio from "../pages/portfolio";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";
import Services from "@/pages/services";
import ServiceDetails from "@/pages/service-details";
import Faq from "@/pages/faq";
import Root from "@/components/layout/root";

import HomeOne from "@/pages/home-1";

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
    ],
  },
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
        path: "/home",
        element: <HomeOne />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
      </>
    ),
    children: [
      {
        path: "/about-us",
        element: <AboutUs />,
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
