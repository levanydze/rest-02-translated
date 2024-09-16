import GuyWithServices from "../../components/Restaurant-01/GuyWithServices/GuyWithServices";
import FourBox from "../../components/Restaurant-01/FourBoxes/FourBox";
import TextIntoPhoto from "../../components/Restaurant-01/TextIntoPhoto/TextIntoPhoto";
import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import PhotoText from "../../components/Restaurant-01/PhotoText/PhotoText";
import HomePageMain from "../../components/Restaurant-01/Hero/HomePageMain";
import MapTimes from "../../components/Restaurant-01/map&times/MapTimes";
import TwoTextAbout from "../../components/Restaurant-01/TwoTextAbout/TwoTextAbout";
import ThreeReviews from "../../components/Restaurant-01/ThreeReviews/ThreeReviews";
import { mainMetadata } from "@/Control/navigation";

export const metadata = {
  title: mainMetadata.title,
  description: mainMetadata.description,
};

export default function Home() {
  const { houseIcon, chair } = assetsJson;
  const { textIntoPhoto, olivOilApple, chef2, chef3 } = imagesJson;

  return (
    <main className="fadeOut">
      <HomePageMain image={olivOilApple} alt="pizza" outline={true} />

      <PhotoText
        image={chef3}
        title1="Leader's Word"
        title2="Made for future"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
      />
      <TwoTextAbout />
      <GuyWithServices image={chef2} />
      <TextIntoPhoto
        TextIntoPhotoIcon={houseIcon}
        TextIntoPhotoImage={olivOilApple}
        alt="chair"
        reverse={false}
        title="The Secret of Oliv Oil"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <TextIntoPhoto
        TextIntoPhotoIcon={chair}
        TextIntoPhotoImage={textIntoPhoto}
        alt="chair"
        reverse={true}
        title="Garantee of Crispiness"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <ThreeReviews />
      <FourBox />
      <MapTimes />
    </main>
  );
}
