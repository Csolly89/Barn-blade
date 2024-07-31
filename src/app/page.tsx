import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="bg-background-50 text-text-950">
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Subscribe />
    </main>
  );
}