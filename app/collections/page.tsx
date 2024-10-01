/* eslint-disable no-console */
"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

// Music card data
const musicCardData = [
  {
    title: "Backend Beats",
    tracks: 10,
    imageSrc: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "DevOps Tunes",
    tracks: 15,
    imageSrc: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "Frontend Flows",
    tracks: 12,
    imageSrc: "https://nextui.org/images/hero-card-complete.jpeg",
  },
];

// Fruit card data
const fruitList = [
  {
    title: "Orange",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "https://nextui.org/images/hero-card-complete.jpeg",
    price: "$3.00",
  },
  {
    title: "Raspberry",
    img: "/images/fruit-3.jpeg",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "/images/fruit-4.jpeg",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "/images/fruit-5.jpeg",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "/images/fruit-6.jpeg",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "/images/fruit-7.jpeg",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "/images/fruit-8.jpeg",
    price: "$12.20",
  },
];

// Main App Component
export default function App() {
  return (
    <div className="p-4">
      {/* Music Cards Section */}
      <h2 className="text-xl font-bold mb-4">Music Playlists</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {musicCardData.map((card, index) => (
          <Card key={index} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">{card.tracks} Tracks</small>
              <h4 className="font-bold text-large">{card.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={card.imageSrc}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Fruit Cards Section */}
      <h2 className="text-xl font-bold mt-8 mb-4">Fresh Fruits</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {fruitList.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
