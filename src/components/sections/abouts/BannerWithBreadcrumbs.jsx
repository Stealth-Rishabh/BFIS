/* eslint-disable react/prop-types */
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const BannerWithBreadcrumbs = ({ title, breadcrumbs }) => {
  return (
    <div className="relative w-full h-[35vh] bg-gradient-to-r from-red-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 mix-blend-overlay"></div>

      {/* Animated Title */}
      <h1 className="text-4xl md:text-5xl font-bold z-20 text-center animate-fadeInUp">
        {title}
      </h1>

      {/* Breadcrumb centered at the bottom, half in banner, half out */}
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20 bg-red-600 py-3 px-8 rounded-full shadow-lg border border-red-600">
        <Breadcrumb>
          <BreadcrumbList className="flex justify-center space-x-3 text-base md:text-lg text-white font-semibold">
            {breadcrumbs.slice(0, -1).map((breadcrumb) => (
              <React.Fragment key={breadcrumb.href}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={breadcrumb.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {breadcrumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white mx-2" />
              </React.Fragment>
            ))}
            {/* Display the current page without duplication */}
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-white">
                {title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BannerWithBreadcrumbs;
