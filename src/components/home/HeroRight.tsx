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
        max-h-[500px] overflow-y-auto pr-1
      "
      aria-label="Highlight cards scrollable"
    >
      {FEATURES.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </div>
  );
}
