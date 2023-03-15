import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/Footer";

// const poppins = Poppins({
//   weight:'400',
//   subset: ['Latin']
// })

export const metadata = {
  title: "Eji-Bright multi-company",
  description: "Multipurpose site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
