import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import ContactAddress from "@/components/sections/contactAddress";
import ContactForm from "@/components/sections/contactForm";
import GoogleMap from "@/components/sections/googleMap";
import NewsletterTwo from "@/components/sections/newsletters/newsletterTwo";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>BFIS || Top school in North India</title>
        <meta name="description" content="BFIS || Top school in North India" />
      </Helmet>
      <main>
        <ContactForm />
        <ContactAddress />
        <GoogleMap />
        <NewsletterTwo />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
