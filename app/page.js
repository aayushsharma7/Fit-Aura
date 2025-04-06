'use client'
import Exercises from "@/components/Exercises";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Calories from "@/components/Calories";
import Nutrition from "@/components/Nutrition";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Exercises />
    <Calories />
    <Nutrition />
    <Contact />
   
    </>
  );
}
