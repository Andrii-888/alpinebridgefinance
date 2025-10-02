"use client";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "@/config/features";

export default function HeroRight() {
  return (
    <div
      className="
        w-full max-w-[600px] ml-auto
        flex flex-col gap-4 lg:gap-5
        pb-12
      "
      aria-label="Highlight cards"
    >
      {FEATURES.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </div>
  );
}
