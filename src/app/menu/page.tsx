import imagesJson from "@/json/images.json";
import PageHeadImage from "@/components/Restaurant-01/PageHeadImage/PageHeadImage";
import Menu from "../../../components/Restaurant-01/MENU/menuWrapper/menu";
import { menuMetadata } from "@/Control/navigation";

export const metadata = {
  title: menuMetadata.title,
  description: menuMetadata.description,
};

export default async function ServerMenu() {
  // Fetch data from Firebase

  // Destructure images
  const { olivOilApple2, pizza3High } = imagesJson;

  return (
    <div className="fadeOut">
      <PageHeadImage
        value="OUR DELICIOUS MENU"
        image={olivOilApple2}
        short={true}
      />
      <Menu />
    </div>
  );
}
