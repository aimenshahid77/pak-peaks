export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const SERVICES: Service[] = [
  {
    id: "transportation",
    number: "01",
    title: "Transportation",
    description:
      "We provide all type of vehicles for family and group tours, including cars, buses, coasters, and Hiace vans.",
    imageUrl: "/services/transportation.jpg",
  },
  {
    id: "hotels",
    number: "02",
    title: "Hotels, Resort & Guest Houses",
    description:
      "We provide a wide range of accommodation options to make our travellers' journeys peaceful and luxurious.",
    imageUrl: "/services/hotels.jpg",
  },
  {
    id: "tours",
    number: "03",
    title: "Corporate, Group & Solo Tours",
    description:
      "Customized travel packages crafted with care and local insight, from corporate group trips and solo adventures to honeymoon getaways.",
    imageUrl: "/services/group-tours.jpg",
  },
];