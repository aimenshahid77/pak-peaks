export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "what-is",
    question: "What is Pak Peaks Travels and Tours?",
    answer:
      "Pak Peaks Travels and Tours is a premier destination management company specializing in curated expeditions across Pakistan's breathtaking northern frontiers. We are passionate about bridge building through tourism, aiming to showcase the raw beauty of the Karakorams and Himalayas while promoting sustainable and culturally respectful travel.",
  },
  {
    id: "how-it-works",
    question: "How does your service work?",
    answer:
      "We offer all inclusive, tailor made travel packages that take the stress out of mountain logistics. From rugged jeep treks in Skardu to serene retreats in Hunza, our process is seamless, safe, and deeply immersive. We handle everything, transportation, expert local guides, and hand picked accommodations, so you can focus on the scenery.",
  },
  {
    id: "pricing",
    question: "How much does it cost?",
    answer:
      "Our pricing varies depending on group size, duration of the trip, and the level of luxury (Standard vs Premium) you prefer. We offer a variety of options to fit your needs, from budget friendly group tours to private VIP expeditions. Please visit our Contact Us page for a personalized quote tailored to your itinerary.",
  },
  {
    id: "flights",
    question: "Do you offer international flight bookings?",
    answer:
      "Currently, we specialize in domestic logistics and ground tours within Pakistan. While we do not book international flights, we do offer comprehensive airport transfers and domestic flight assistance, such as the Islamabad to Skardu route, to ensure your transition into the mountains is effortless.",
  },
  {
    id: "contact",
    question: "How can I contact you?",
    answer:
      "We would love to help you plan your next adventure. You can reach us at info@pakpeaks.org or by clicking the Contact Us button on our navigation bar. Our team is always happy to answer your questions about weather, gear, or custom routes.",
  },
  {
    id: "learn-more",
    question: "Where can I learn more about you?",
    answer:
      "To dive deeper into our story, visit our About Us page. For travel inspiration, hidden gems, and expert trekking tips, be sure to explore our blog, where we share the latest stories from the trails of Gilgit Baltistan and beyond.",
  },
];