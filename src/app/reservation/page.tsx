import ReservationContactForm from "@/components/Restaurant-01/ReservationContactForm/ReservationContactForm";
import PageHeadImage from "@/components/Restaurant-01/PageHeadImage/PageHeadImage";
import imagesJson from "@/json/images.json";
import MapTimes from "@/components/Restaurant-01/map&times/MapTimes";
import { reservationMetadata } from "@/Control/navigation";

export const metadata = {
  title: reservationMetadata.title,
  description: reservationMetadata.description,
};

export default function Reservation() {
  const { pizzaHeadImage } = imagesJson;

  return (
    <div className="fadeOut">
      <PageHeadImage
        value="RESERV A TABLE"
        image={pizzaHeadImage}
        short={false}
      />
      <ReservationContactForm />
      <MapTimes />
    </div>
  );
}
