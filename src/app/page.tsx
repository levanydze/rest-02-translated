import { mainMetadata } from "@/Control/navigation";
import Testimonials from "@/Restaurant-02/components/rest-2-Testimonials/Testimonials";
import ComponentThree from "@/Restaurant-02/components/componentThree/ComponentThree";
import ComponentTwo from "@/Restaurant-02/components/componentTwo/ComponentTwo";
import Hero from "@/Restaurant-02/components/hero/Hero";
import imagesJson from "@/Restaurant-02/json/images.json";
import ComponentSix from "@/Restaurant-02/components/componentSix/ComponentSix";
import ComponentFive from "@/Restaurant-02/components/componentFive/ComponentFive";
import { companyName } from "@/Control/controls";
import { LanguageSwitcher } from "./languageSwitcher";

export const metadata = {
  title: mainMetadata.title,
  description: mainMetadata.description,
  openGraph: {
    title: mainMetadata.title,
    description: mainMetadata.description,
    siteName: companyName,
  },
};

export default function Home() {
  const { hero, componentTwoImage } = imagesJson;
  const language = "EN";

  return (
    <main className="fadeOut">
      <Hero
        days="Tue-Sun"
        hours="8:00am - 9:00 pm"
        address1="Rue Leschot 10, 1205 "
        address2="Genève, Switzerland"
        image={hero}
      />
      <ComponentTwo
        title="With Love"
        text="We strive to create a memorable experience while serving you the best environmentally sustainable dishes from our thriving local community."
        image={componentTwoImage}
      />
      <Testimonials
        language={language}
        title1="Some Love"
        title2="From our customers"
      />
      <ComponentThree
        title="Our Story"
        text="What started as a simple passion for homemade sushi has rapidly evolved into a second home for all sushi enthusiast.."
        image={componentTwoImage}
      />
      <ComponentSix title="Reserv a Table" language={language} />
      <ComponentFive
        image={componentTwoImage}
        title="Join our community on"
        alt1=""
        alt2=""
        alt3=""
        alt4=""
      />
    </main>
  );
}
