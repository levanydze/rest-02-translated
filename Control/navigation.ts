// navigation types
interface NavItemProps {
  title: string;
  url: string;
  homePage?: boolean;
  button?: boolean;
}
interface metadataProps {
  title: string;
  description: string;
}
//nav items and sort
export const navItems: NavItemProps[] = [
  { title: "Home", url: "/", homePage: true },
  { title: "Menu", url: "/menu" },
  { title: "About us", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Reseravation", url: "/reservation", button: false },
];

// Main  Metadata
export const mainMetadata: metadataProps = {
  title: "ChaCha Restaurant",
  description:
    "I create modern & functional, SEO-optimized custom-designed websites for businesses, including restaurants, gardening services, travel agencies, and more. Along with web development, I offer professional photography to elevate your online presence and perfectly align with your business needs.",
};

// Metadata for specific pages
export const aboutMetadata: metadataProps = {
  title: "About Us - Our Story",
  description: "Learn more about our history, values, and mission.",
};

export const menuMetadata: metadataProps = {
  title: "Our Menu",
  description: "Explore our wide variety of dishes and beverages.",
};

export const contactMetadata: metadataProps = {
  title: "Contact Us",
  description: "Get in touch with us for inquiries, feedback, or support.",
};

export const reservationMetadata: metadataProps = {
  title: "Reservation",
  description:
    "Reserve your table online and ensure a wonderful dining experience.",
};

export const errorMetadata: metadataProps = {
  title: "Error",
  description:
    "Reserve your table online and ensure a wonderful dining experience.",
};
export const notFoundMetadata: metadataProps = {
  title: "Not Found",
  description:
    "Reserve your table online and ensure a wonderful dining experience.",
};
