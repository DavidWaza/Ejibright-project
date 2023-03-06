import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Nav from "./components/nav";
import Hero from "./components/Hero";
import Consult from "./components/ConsultSection";
import About from "./components/AboutSection";
import Community from "./components/Community";
import Services from "./components/Services";
import Team from "./components/Team";

export const metadata = {
  title: "Eji-Bright multi-company",
  description: "Multipurpose site",
};

export default function RootLayout({ children }) {
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
      rel="stylesheet"
    />
  </Head>;
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        <Hero />
        <Consult />
        <About />
        <Community />
        <Services />
        <Team />
        {children}
      </body>
    </html>
  );
}
