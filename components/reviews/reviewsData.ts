export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  imageUrl: string;
}

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Hamid Khan",
    role: "Solo Traveler, Karachi",
    rating: 5,
    text: "As someone who barely gets time off work, I wasn't sure a trip to Hunza would even be possible to plan. Pak Peaks handled everything, the drive, the stays, the little detours, and it ended up being the most peaceful week I've had in years.",
    imageUrl: "/reviews/traveler-1.jpg",
  },
  {
    id: "2",
    name: "Areeba Tariq",
    role: "Family Trip, Lahore",
    rating: 5,
    text: "We travelled with my parents and two kids to Naran and Kaghan, and I was worried about the roads. The vehicle and driver Pak Peaks arranged were excellent, comfortable, careful, and genuinely warm with the children.",
    imageUrl: "/reviews/traveler-2.jpg",
  },
  {
    id: "3",
    name: "Bilal Ahmed",
    role: "Trekking Group, Islamabad",
    rating: 5,
    text: "K2 Base Camp was always on my list but I never trusted a local operator enough to book it. Pak Peaks proved me wrong, the guides knew the Baltoro Glacier route like the back of their hand.",
    imageUrl: "/reviews/traveler-3.jpg",
  },
  {
    id: "4",
    name: "Sana Malik",
    role: "Honeymoon Trip, Multan",
    rating: 4,
    text: "Fairy Meadows was breathtaking and exactly the kind of quiet, scenic escape we wanted for our honeymoon. The guesthouse they picked had the best view of Nanga Parbat I could have imagined.",
    imageUrl: "/reviews/traveler-4.jpg",
  },
];