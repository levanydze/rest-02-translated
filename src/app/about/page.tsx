import React from "react";
import PageHeadImage from "@/components/Restaurant-01/PageHeadImage/PageHeadImage";
import imagesJson from "@/json/images.json";
import MapTimes from "@/components/Restaurant-01/map&times/MapTimes";
import TwoTextAbout from "@/components/Restaurant-01/TwoTextAbout/TwoTextAbout";
import PhotoText from "@/components/Restaurant-01/PhotoText/PhotoText";
import ThreeReviews from "@/components/Restaurant-01/ThreeReviews/ThreeReviews";
import GuyWithServices from "@/components/Restaurant-01/GuyWithServices/GuyWithServices";
import { aboutMetadata } from "@/Control/navigation";

export const metadata = {
  title: aboutMetadata.title,
  description: aboutMetadata.description,
};

export default function AboutPage() {
  const { olivOilApple1, pizza1High, chef2, chef } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="ABOUT US" image={olivOilApple1} short={true} />
      <TwoTextAbout />
      <GuyWithServices image={chef2} />
      <PhotoText
        image={chef}
        title1="Leader's Word"
        title2="MADE FOR FUTURE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
        // reverse
      />
      <ThreeReviews />
      <MapTimes />
    </div>
  );
}
