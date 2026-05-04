import FadeIn from "./FadeIn";
import { CheckCircle } from "lucide-react";

const IMGS = {
  mission:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
};

const MissionSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <img src={IMGS.mission} className="rounded-3xl shadow-2xl" alt="Star India Energy Solutions mission - pure reliable solar energy" loading="lazy" decoding="async" />
        </FadeIn>

        <FadeIn direction="right">
          <h2 className="text-4xl font-black mb-6">
            Pure, Reliable & Free Energy
          </h2>

          <div className="space-y-4">
            {[
              "Tier-1 Solar Panels",
              "MNRE Approved",
              "Monitoring System",
              "Pan India Service",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" />
                {point}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default MissionSection;
