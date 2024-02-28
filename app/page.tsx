import CarCard from "@/components/CarCard";
import CustomeFilter from "@/components/CustomeFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utilis";
import Image from "next/image";

export default async function Home() {
const allCars = await fetchCars()
console.log(allCars)
const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomeFilter title="fuel" />
            <CustomeFilter title="year" />
          </div>
        </div>

    { !isDataEmpty ? (
      <section>
        <div className="home__cars-wrapper">
        {
          allCars?.map((car)=> (<CarCard car={car} />))
        }
        </div>
      </section>
    ) :  (
      <div className="home__eror-container">
        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        <p>{allCars?.message}</p>
      </div>
    )

    }




      </div>
    </main>
  );
}
