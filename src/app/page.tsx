import HeroLeft from "@/components/home/HeroLeft";
import HeroRight from "@/components/home/HeroRight";

export default function Home() {
  return (
    <section className="min-h-[70vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
      <HeroLeft />

      <HeroRight />
    </section>
  );
}
