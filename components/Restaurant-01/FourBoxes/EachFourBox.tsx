import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EachFourBoxProps {
  image: string;
  alt: string;
  title: string;
  link?: boolean;
  phone?: boolean;
  email?: boolean;
}

export default function EachFourBox({
  image,
  alt,
  title,
  link,
  phone,
  email,
}: EachFourBoxProps) {
  return (
    <>
      {!link ? (
        <div>
          <Image src={image} width={70} height={70} alt={alt} />
          <p className="twoLines"></p>
          {email ? (
            <Link href={`mailto:${title}`} className="paragraph ">
              {title}
            </Link>
          ) : phone ? (
            <Link href={`tel:${title}`} className="paragraph">
              {title}
            </Link>
          ) : (
            <h4 className="paragraph">{title}</h4>
          )}
        </div>
      ) : (
        <Link href="/contact">
          <Image src={image} width={70} height={70} alt={alt} />
          <p className="twoLines"></p>
          <h4 className="paragraph">{title}</h4>
        </Link>
      )}
    </>
  );
}
