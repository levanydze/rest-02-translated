import { ImageResponse } from "next/og";
import { fireEachData } from "../../../../Control/fetchingData";

export const runtime = "edge";

// type Props = {
//   params: {
//     itemId: string;
//   };
// };

export const alt = "Delicious Menu Item";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { itemId: string };
}) {
  // Correctly accessing itemId from params
  const item = await fireEachData(params.itemId);

  // If no item is found, return a default image response
  if (!item) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Item Not Found
        </div>
      ),
      {
        ...size,
      }
    );
  }

  // Return the item-specific image response
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={item.image} alt={item.name} />
        <h1 className="" tw=" absolute">
          {item.name}
        </h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
