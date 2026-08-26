import mandazi from "@/assets/menu-mandazi.jpg";
import breakfastPlate from "@/assets/menu-breakfast-plate.jpg";
import pilau from "@/assets/menu-pilau.jpg";
import nyama from "@/assets/menu-nyama.jpg";
import chickenCurry from "@/assets/menu-chicken-curry.jpg";
import tilapia from "@/assets/menu-tilapia.jpg";
import chapati from "@/assets/menu-chapati.jpg";
import kachumbari from "@/assets/menu-kachumbari.jpg";
import juice from "@/assets/menu-juice.jpg";
import chai from "@/assets/menu-chai.jpg";
import mangoCake from "@/assets/menu-mango-cake.jpg";
import fruitPlatter from "@/assets/menu-fruit-platter.jpg";

export const categories = [
  "Breakfast",
  "Mains",
  "Sides",
  "Drinks",
  "Desserts",
] as const;

export type Category = (typeof categories)[number];
export type Diet = "Vegetarian" | "Vegan" | "High protein" | "Gluten free";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  diet: Diet[];
};

// [PLACEHOLDER] Menu content and prices — replace with the real menu.
export const menuItems: MenuItem[] = [
  {
    id: "mandazi",
    name: "Mandazi & Chai",
    description: "Four soft mandazi with a flask of spiced Kenyan chai.",
    price: 350,
    category: "Breakfast",
    image: mandazi,
    diet: ["Vegetarian"],
  },
  {
    id: "breakfast-plate",
    name: "Foi's Breakfast Plate",
    description: "Eggs your way, grilled tomato, avocado and toast.",
    price: 650,
    category: "Breakfast",
    image: breakfastPlate,
    diet: ["Vegetarian", "High protein"],
  },
  {
    id: "pilau",
    name: "Beef Pilau",
    description: "Slow-spiced pilau rice with tender beef and kachumbari.",
    price: 750,
    category: "Mains",
    image: pilau,
    diet: ["High protein"],
  },
  {
    id: "nyama-choma",
    name: "Nyama Choma",
    description: "Charcoal-grilled goat, lime and kachumbari on the side.",
    price: 1200,
    category: "Mains",
    image: nyama,
    diet: ["High protein", "Gluten free"],
  },
  {
    id: "chicken-curry",
    name: "Coconut Chicken Curry",
    description: "Creamy coconut curry with coriander, served with rice.",
    price: 850,
    category: "Mains",
    image: chickenCurry,
    diet: ["High protein", "Gluten free"],
  },
  {
    id: "tilapia",
    name: "Whole Fried Tilapia",
    description: "Crisp tilapia with ugali and sautéed greens.",
    price: 1100,
    category: "Mains",
    image: tilapia,
    diet: ["High protein", "Gluten free"],
  },
  {
    id: "chapati",
    name: "Soft Chapati (3 pcs)",
    description: "Layered, buttery chapati, made to order.",
    price: 150,
    category: "Sides",
    image: chapati,
    diet: ["Vegetarian"],
  },
  {
    id: "kachumbari",
    name: "Kachumbari",
    description: "Tomato, onion, coriander and lime — fresh and sharp.",
    price: 120,
    category: "Sides",
    image: kachumbari,
    diet: ["Vegan", "Gluten free"],
  },
  {
    id: "juice",
    name: "Fresh Mango–Passion Juice",
    description: "Pressed the same morning, no added sugar.",
    price: 250,
    category: "Drinks",
    image: juice,
    diet: ["Vegan", "Gluten free"],
  },
  {
    id: "chai",
    name: "Spiced Chai Flask",
    description: "Ginger and cinnamon chai, one litre flask.",
    price: 400,
    category: "Drinks",
    image: chai,
    diet: ["Vegetarian"],
  },
  {
    id: "mango-cake",
    name: "Mango Cream Cake",
    description: "Light sponge, mango cream, one generous slice.",
    price: 300,
    category: "Desserts",
    image: mangoCake,
    diet: ["Vegetarian"],
  },
  {
    id: "fruit-platter",
    name: "Tropical Fruit Platter",
    description: "Watermelon, pineapple, mango and passion — serves four.",
    price: 900,
    category: "Desserts",
    image: fruitPlatter,
    diet: ["Vegan", "Gluten free"],
  },
];
