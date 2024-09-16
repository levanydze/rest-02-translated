import React from "react";
import ContactForm from "@/components/Restaurant-01/CotactForm/ContactForm";
import PageHeadImage from "@/components/Restaurant-01/PageHeadImage/PageHeadImage";
import imagesJson from "@/json/images.json";
import MapTimes from "@/components/Restaurant-01/map&times/MapTimes";
import { contactMetadata } from "@/Control/navigation";

export const metadata = {
  title: contactMetadata?.title || "Contact Us - Default Title",
  description:
    contactMetadata?.description || "Default description for contact page.",
};
export default function ContactPage() {
  const { headImage, pizza2High } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="CONTSCT US" image={pizza2High} short={true} />
      <ContactForm />
      <MapTimes />
    </div>
  );
}
