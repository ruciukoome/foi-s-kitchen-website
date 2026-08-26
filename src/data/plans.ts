import planLean from "@/assets/plan-lean.jpg";
import planPlant from "@/assets/plan-plant.jpg";
import planFamily from "@/assets/plan-family.jpg";

export type Plan = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  image: string;
  includes: string[];
  tags: string[];
};

// [PLACEHOLDER] Meal prep plans and pricing.
export const plans: Plan[] = [
  {
    id: "lean",
    name: "Lean & Light",
    price: 6500,
    cadence: "per week",
    image: planLean,
    includes: [
      "10 portioned lunches or dinners",
      "Lean protein, grains and greens",
      "Calorie and macro card in every box",
      "Sunday and Wednesday delivery",
    ],
    tags: ["High protein", "Low carb"],
  },
  {
    id: "plant",
    name: "Plant Forward",
    price: 5800,
    cadence: "per week",
    image: planPlant,
    includes: [
      "10 fully plant-based meals",
      "Lentils, chickpeas, seasonal veg",
      "Nut-free on request",
      "Sunday and Wednesday delivery",
    ],
    tags: ["Vegan", "Fibre rich"],
  },
  {
    id: "family",
    name: "Family Table",
    price: 11500,
    cadence: "per week",
    image: planFamily,
    includes: [
      "5 family-size dinners (serves 4)",
      "Home-style stews, rice and greens",
      "Reheat in 10 minutes",
      "One weekly delivery, day of your choice",
    ],
    tags: ["Serves 4", "Home-style"],
  },
];
