import React, { Suspense } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

import styles from "./page.module.css";
import MenuDetails from "./menuDetails/MenuDetails";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import LoadingComponent from "../../../components/x-error-loading-notFound/loading/LoadingComponent";
import imageJson from "../../../json/images.json";

import { getData } from "../DataFetch";

// metadata
import { Metadata } from "next";
type Props = {
  params: {
    menuId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const data = await getData(params.menuId);
    const name = data.name;
    return {
      title: name,
      alternates: {
        canonical: `/menu/${data.name}levanie`,
      },
    };
  } catch (error) {
    return {};
  }
};

interface MenuDetailsPageProps {
  params: {
    menuId: string;
  };
}

export default function MenuDetailsPage({ params }: MenuDetailsPageProps) {
  const { headImage } = imageJson;

  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <PageHeadImage image={headImage} short={true} value="Yummy Yummy" />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
        <Suspense fallback={<LoadingComponent />}>
          <MenuDetails menuId={params.menuId} />
        </Suspense>
      </div>
    </div>
  );
}
