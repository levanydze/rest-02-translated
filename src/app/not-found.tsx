import { notFoundMetadata } from "@/Control/navigation";
import NotFoundComponent from "@/components/GlobalComponents/Error-NotFound/notFound/NotFoundComponent";

export const metadata = {
  title: notFoundMetadata?.title,
  description: notFoundMetadata?.description,
};

export default function error() {
  return (
    <section className="section">
      <div className="container">
        <NotFoundComponent />
        <h6 className="heading5 color1"></h6>
      </div>
    </section>
  );
}

// "use client";

// export default function NotFound() {
//   return (
//     <html>
//       <body className="text-center">
//         <h1 className="mt-10 font-semibold">Something went wrong!</h1>
//       </body>
//     </html>
//   );
// }
