// import {
//   supportedLanguages,
//   languageFlags,
//   SupportedLanguagesProps,
// } from "@/Control/languageControl";
// import { usePathname, useRouter } from "next/navigation";
// import Flag from "react-world-flags"; // Assuming you are using this package
// import styles from "./LanguageSwitcher.module.css"; // Import your CSS
// import { useState, useEffect } from "react";

// export default function LanguageSwitcher({
//   lang,
// }: {
//   lang: SupportedLanguagesProps;
// }) {
//   const pathname = usePathname(); // Get the current pathname
//   const router = useRouter();
//   const [flagShow, setFlagShow] = useState<boolean>(false);

//   const handleLanguageChange = (newLang: SupportedLanguagesProps) => {
//     const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
//     router.push(newPathname); // Redirect to the new language path
//     setFlagShow(false); // Close the dropdown after language change
//   };

//   const flagToggler = () => {
//     setFlagShow((prevFlagShow) => !prevFlagShow);
//   };

//   // Close the flag dropdown when the pathname changes
//   useEffect(() => {
//     setFlagShow(false); // Close the dropdown whenever the pathname changes
//   }, [pathname]); // Trigger the effect whenever `pathname` changes

//   return (
//     <div className={styles.languageSwitcher}>
//       <button className={styles.currentLang} onClick={flagToggler}>
//         <Flag
//           className={styles.flags}
//           code={languageFlags[lang]} // Correctly type-safe now
//         />
//       </button>
//       <ul
//         className={`${flagShow ? styles.open : styles.closed} ${
//           styles.languageDropdown
//         }`}
//       >
//         {supportedLanguages.map((supportedLang) => (
//           <li key={supportedLang}>
//             <button onClick={() => handleLanguageChange(supportedLang)}>
//               <Flag
//                 className={styles.flags}
//                 code={languageFlags[supportedLang]}
//               />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
