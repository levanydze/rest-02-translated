import styles from "./MenuDetails.module.css";
import Image from "next/image";
import { fireEachData } from "../../../../../Control/fetchingData";
// import { MenuItemProps } from "../../functions";
import imageJson from "@/Restaurant-02/json/images.json";
import PageHeadImage from "@/Restaurant-01/components/PageHeadImage/PageHeadImage";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";
import NotFoundComponent from "@/components/Error-NotFound/notFound/NotFoundComponent";

export default async function MenuDetails({ itemId }: { itemId: string }) {
  const { headImage } = imageJson;
  const data = await fireEachData(itemId);

  if (!data) {
    // Handle the case where data is null
    return <NotFoundComponent />;
  }
  return (
    <>
      <PageHeadImage image={headImage} short={true} value={data.name} />
      <Link href="./">
        <RiArrowGoBackFill className={styles.goBackIcon} />
      </Link>
      <div className={styles.menuDetailsWrapper}>
        <div className={styles.imgWrapper}>
          <Image
            priority
            src={data.image}
            alt={data.name}
            height={1000}
            width={1000}
          />
        </div>
        <div className={styles.infoWrapper}>
          <h2 className="heading3 font1 color1">{data.name}</h2>
          <h2 className="heading5 font1 white ">
            INGREDIENTS: {data.ingredients}
          </h2>
          <p className="paragraph ">{data.description}</p>
          <p className="textLight title1 font1">{data.portions}</p>
          <div className={styles.specifications}>
            {data.special ? (
              <p className={`menuTags ${styles.special}`}>special</p>
            ) : null}
            {data.season ? (
              <p className={`menuTags ${styles.season}`}>season</p>
            ) : null}
            {data.vegan ? (
              <p className={`menuTags ${styles.vegan}`}>vegan</p>
            ) : null}
            {data.spicy ? (
              <p className={`menuTags ${styles.spicy}`}>spicy</p>
            ) : null}
            {data.newItem ? (
              <p className={`menuTags ${styles.newItem}`}>new</p>
            ) : null}
          </div>
          <h4 className={`font1 white heading4 ${styles.price}`}>
            Price: {data.price} Sek
          </h4>
        </div>
      </div>
    </>
  );
}
