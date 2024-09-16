import React, { Suspense } from "react";
import styles from "./page.module.css";
import MenuDetails from "../../../../components/Restaurant-01/MENU/menuWrapper/card/eachItemPage/MenuDetails";
import { fireEachData } from "../../../../Control/fetchingData";

import { Metadata } from "next";
type Props = {
  params: {
    itemId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const data = await fireEachData(params.itemId);
    if (!data)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exists",
      };
    {
      return {
        title: data.name,
        description: data.description,
        alternates: {
          canonical: `/menu/${data.name}`,
        },
      };
    }
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exists",
    };
  }
};

interface MenuDetailsPageProps {
  params: {
    itemId: string;
  };
}

export default function MenuDetailsPage({ params }: MenuDetailsPageProps) {
  // console.log(params.itemId);
  return (
    <div className="fadeOut">
      <MenuDetails itemId={params.itemId} />
    </div>
  );
}
