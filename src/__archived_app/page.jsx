import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  const lang = "en";
  return (
    <>
      <Header lang={lang} />
      <section className="hero-executive">
        <Hero lang={lang} />
      </section>
    </>
  );
} 
