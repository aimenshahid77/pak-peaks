export type TourCategory = "Wheels" | "Foot";

export interface TourSlide {
  id: string;
  title: string;
  description: string;
  category: TourCategory;
  imageUrl: string;
  duration: string;
  elevation: string;
  bestSeason: string;
}
