/* eslint-disable react/prop-types */
// src/components/layouts/AboutLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import AboutSidebar from "@/components/sections/abouts/AboutSidebar";
import BannerWithBreadcrumbs from "@/components/sections/abouts/BannerWithBreadcrumbs";

const AboutLayout = ({ sidebarLinks }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define breadcrumbs based on path
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    ...(currentPath === "/about/message"
      ? [{ href: "/about/message", label: "Message" }]
      : []),
    ...(currentPath === "/about/values"
      ? [{ href: "/about/values", label: "Our Values" }]
      : []),
    ...(currentPath === "/about/set-us-apart"
      ? [{ href: "/about/set-us-apart", label: "What Sets Us Apart" }]
      : []),
  ];

  // Determine title based on the last breadcrumb
  const title = breadcrumbs[breadcrumbs.length - 1].label;

  return (
    <div>
      {/* Banner with Breadcrumbs */}
      <BannerWithBreadcrumbs title={title} breadcrumbs={breadcrumbs} />

      <div className="container mx-auto grid grid-cols-4 gap-8 mt-8">
        {/* Content Area for Subpages */}
        <div className="col-span-3 bg-white p-6 rounded-lg shadow">
          <Outlet />
        </div>

        {/* Sidebar for About Pages */}
        <AboutSidebar sidebarLinks={sidebarLinks} />
      </div>
    </div>
  );
};

export default AboutLayout;
