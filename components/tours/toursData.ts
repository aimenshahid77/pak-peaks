export type TourCategory = "All" | "Wheels" | "Foot" | "Family" | "Corporate";
export type TourDuration = "All" | "3 Days" | "5 Days" | "7 Days" | "10 Days" | "21 Days";

export interface Tour {
  id: string;
  title: string;
  location: string;
  category: TourCategory;
  duration: string;
  days: number;
  elevation: string;
  bestSeason: string;
  price: string;
  rating: number;
  imageUrl: string;
  tag?: string;
}

export const TOURS: Tour[] = [
  {
    id: "hunza-valley",
    title: "Hunza Valley",
    location: "Gilgit-Baltistan",
    category: "Wheels",
    duration: "7 Days / 6 Nights",
    days: 7,
    elevation: "2,438 m",
    bestSeason: "Apr – Oct",
    price: "PKR 45,000",
    rating: 5,
    imageUrl: "/destinations/hunza-valley.jpg",
    tag: "Most Popular",
  },
  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    location: "Diamer, Gilgit-Baltistan",
    category: "Foot",
    duration: "5 Days / 4 Nights",
    days: 5,
    elevation: "3,300 m",
    bestSeason: "Jun – Sep",
    price: "PKR 38,000",
    rating: 5,
    imageUrl: "/destinations/fairy-meadows.jpg",
  },
  {
    id: "skardu",
    title: "Skardu",
    location: "Gilgit-Baltistan",
    category: "Wheels",
    duration: "10 Days / 9 Nights",
    days: 10,
    elevation: "2,228 m",
    bestSeason: "May – Sep",
    price: "PKR 62,000",
    rating: 4,
    imageUrl: "/destinations/skardu.jpg",
    tag: "Hot Deal",
  },
  {
    id: "naran-kaghan",
    title: "Naran Kaghan",
    location: "Khyber Pakhtunkhwa",
    category: "Wheels",
    duration: "6 Days / 5 Nights",
    days: 6,
    elevation: "2,409 m",
    bestSeason: "Jun – Aug",
    price: "PKR 35,000",
    rating: 4,
    imageUrl: "/destinations/naran-kaghan.jpg",
  },
  {
    id: "k2-base-camp",
    title: "K2 Base Camp",
    location: "Baltoro Glacier, Skardu",
    category: "Foot",
    duration: "21 Days / 20 Nights",
    days: 21,
    elevation: "5,150 m",
    bestSeason: "Jun – Aug",
    price: "PKR 180,000",
    rating: 5,
    imageUrl: "/destinations/k2-base-camp.jpg",
    tag: "Adventure",
  },
  {
    id: "khunjerab-pass",
    title: "Khunjerab Pass",
    location: "Karakoram Highway",
    category: "Wheels",
    duration: "3 Days / 2 Nights",
    days: 3,
    elevation: "4,693 m",
    bestSeason: "May – Oct",
    price: "PKR 22,000",
    rating: 4,
    imageUrl: "/destinations/khunjerab-pass.jpg",
  },
];