import { createFileRoute } from "@tanstack/react-router";
import { ProductExplorer } from "@/components/explore/ProductExplorer";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  About,
  Contact,
  Features,
  Hero,
  HowItWorks,
  Problem,
  Solution,
  Team,
  Tech,
  Vision,
} from "@/components/site/Sections";

const TITLE = "E-Guard – Smarter Care. Safer Living.";
const DESCRIPTION =
  "E-Guard is a HealthTech project in development: a wearable, camera and mobile app system designed to help families stay aware of an elderly loved one’s safety and health.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <ProductExplorer />
        <HowItWorks />
        <Features />
        <Tech />
        <Vision />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
