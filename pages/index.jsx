import Head from "next/head";

import Header from "@/components/header";
import Footer from "@/components/footer";

import Hero from "@/components/home/hero";
import Toolkit from "@/components/home/toolkit";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* Site title */}
      <Head>
        <title>Solutioner&trade; · 极客学园</title>
      </Head>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Hero />
        <Toolkit />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}
