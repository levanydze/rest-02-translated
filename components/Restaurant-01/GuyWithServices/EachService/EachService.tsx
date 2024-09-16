import Image from "next/image";
import Link from "next/link";
import React from "react";

type EachServiceProps = {
  icon: string;
  url: string;
  title: string;
};

export default function EachService({ icon, url, title }: EachServiceProps) {
  return (
    <div>
      <Image src={icon} width={50} height={50} alt={title}></Image>
      <h2 className="heading5 ">{title}</h2>
      <Link className="caption font1" href={url}>
        Learn more
      </Link>
    </div>
  );
}
