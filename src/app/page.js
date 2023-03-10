'use client'
// import Image from 'next/image'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from "./components/Hero";
import Consult from "./components/ConsultSection";
import About from "./components/AboutSection";
import Community from "./components/Community";
import Services from "./components/Service";
import Team from "./components/Team";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  <Head>

</Head>
  return (
    <main className={styles.main}>
      <Hero />  
        <Consult />
        <About />
        <Services />
        <Community />
        <Team />
    </main>
  )
}
