import Menu from "@/src/app/menu/menuComponents/menu";
import { menuMetadata } from "@/Control/navigation";

export const metadata = {
  title: menuMetadata.title,
  description: menuMetadata.description,
};

export default async function ServerMenu() {
  // Fetch data from Firebase

  // Destructure images

  return (
    <div className="fadeOut">
      <Menu />
    </div>
  );
}
