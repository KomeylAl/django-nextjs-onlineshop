import Image from "next/image";
import Hero from "./_components/Hero";
import Products from "./_components/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}
