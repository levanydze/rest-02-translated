export interface RevirwDetProps {
  text: string;
  name: string;
  title: string;
  image: string;
  alt: string;
}
interface ReviewProps {
  [key: string]: RevirwDetProps; // Index signature
}
export const reviews: ReviewProps = {
  acme: {
    text: `"Our dining experience at ChaCha's was nothing short of exceptional. The attention to detail in every dish and the warm, inviting atmosphere made our evening truly memorable."`,
    name: "Gabriella Johnsson",
    title: "Food Critic",
    image:
      "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/random%20people/gingerGirl.webp",
    alt: "Gabriella Johnsson enjoying her meal",
  },
  acme2: {
    text: `"From the moment we walked in, we were treated like VIPs. The service was impeccable, and the food was out of this world. ChaCha's has definitely become our go-to spot for special occasions."`,
    name: "Julia Morison",
    title: "Food Enthusiast",
    image:
      "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/random%20people/blonde%20girl.webp",
    alt: "Julia Morison dining at ChaCha's",
  },
  acme3: {
    text: `"ChaCha's exceeded our expectations with their exquisite menu and top-notch service. Every bite was a delight, and the ambiance was perfect for a relaxing evening out."`,
    name: "Alex Hansson",
    title: "Restaurant Reviewer",
    image:
      "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/random%20people/manWithBeard.webp",
    alt: "Alex Hansson enjoying the ambiance",
  },
};
