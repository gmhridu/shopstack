import { Hero } from "#/components/templates/store/homepage/hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(store)/_layout/")({ component: App });

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      Home
    </div>
  );
}
