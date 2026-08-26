import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { PlanCard } from "@/components/PlanCard";
import { PrimaryLink, WhatsAppLink } from "@/components/CtaButtons";
import { plans } from "@/data/plans";
import { site } from "@/lib/site";

export const Route = createFileRoute("/services/meal-prep")({
  head: () => ({
    meta: [
      { title: "Weekly Meal Prep Plans in Nairobi — Foi's Kitchen" },
      {
        name: "description",
        content:
          "Lean, plant-forward and family meal prep plans delivered twice a week in Nairobi. Portioned, labelled and ready to heat.",
      },
      { property: "og:title", content: "Weekly Meal Prep Plans — Foi's Kitchen" },
      {
        property: "og:description",
        content: "Pick a plan, we cook and deliver your week. From KSh 5,800.",
      },
    ],
  }),
  component: MealPrepPage,
});

function MealPrepPage() {
  return (
    <>
      <PageHero
        eyebrow="Meal prep plans"
        title="Your week, cooked and portioned."
        intro="Choose a plan on Friday, eat well all week. Delivered twice weekly across Nairobi in sealed, labelled containers."
      >
        <PrimaryLink to="/order">Go to your order</PrimaryLink>
        <WhatsAppLink message={`Hi ${site.name}! I'd like help choosing a meal prep plan.`}>
          Ask a question
        </WhatsAppLink>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <SectionReveal key={plan.id} delay={i * 80}>
                <PlanCard plan={plan} />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-10 rounded-2xl bg-card p-6 text-sm text-muted-foreground shadow-card">
            All plans can be adjusted for allergies, portion size and delivery days.
            Pause any week with 48 hours' notice. [PLACEHOLDER] Confirm plan terms.
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
