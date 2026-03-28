import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/templates/store/homepage/hero";
import { FeatureGrid } from "#/components/templates/store/homepage/feature-grid";
import { Collections } from "#/components/templates/store/homepage/collections";
import { CtaBanner } from "#/components/templates/store/homepage/cta-banner";

export const Route = createFileRoute("/(store)/_layout/")({ component: App });

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureGrid />
      <Collections />
      <CtaBanner />
    </div>
  );
}
