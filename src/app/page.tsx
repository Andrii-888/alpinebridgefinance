import HeroLeft from "@/components/home/HeroLeft";
import HeroRight from "@/components/home/HeroRight";
import TrustedBy from "@/components/home/TrustedBy";
import UseCases from "@/components/home/UseCases";

export default function Home() {
  return (
    <>
      {/* Hero секция */}
      <section
        className="min-h-[70vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10
        px-6
        bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(26,188,156,0.12)_45%,rgba(212,175,55,0.18)_100%),linear-gradient(#ffffff,#ffffff)]"
      >
        <HeroLeft />
        <HeroRight />
      </section>

      <section className="mt-16 px-6">
        <UseCases />
      </section>

      <section className="mt-16 px-6">
        <TrustedBy />
      </section>
    </>
  );
}
