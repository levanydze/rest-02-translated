import React, { Suspense } from "react";
import PageHeadImage from "@/components/Restaurant-01/PageHeadImage/PageHeadImage";
import imagesJson from "../../json/images.json";
import MenuList from "./menuList/MenuList";
import LoadingComponent from "../../components/x-error-loading-notFound/loading/LoadingComponent";

export const metadata = {
  title: "Menu ",
  description: "Delicious Food",
};

export default function MenuPage() {
  const { headImage, pizza3High } = imagesJson;
  return (
    <div className="fadeOut ">
      <PageHeadImage
        value="OUR DELICIOUS MENU"
        image={pizza3High}
        short={true}
      />
      <Suspense fallback={<LoadingComponent />}>
        <MenuList category="pizza" />
        <MenuList category="breakfast" />
        <MenuList category="lunch" />
        <MenuList category="dinner" />
        <MenuList category="dessert" />
        <MenuList category="drink" />
      </Suspense>
    </div>
  );
}
