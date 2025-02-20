import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { Route } from "./+types/countries";
import { Link } from "react-router";

export async function clientLoader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) throw new Error("Fetching error!");
  return response.json();
}

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) throw new Error("Fetching error!");
  return response.json();
};

function Countries({ loaderData }: Route.ComponentProps) {
  // const { data } = useQuery({
  //   queryKey: ["countrie"],
  //   queryFn: fetchCountries,
  // });

  return (
    <section className="flex flex-wrap p-4 gap-4 bg-gray-400">
      {loaderData?.map((countrie: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col border-2 border-gray-200 p-4 shadow-md max-w-60 bg-gray-200"
          >
            <Link
              to={`/countries/${countrie?.name?.common}`}
              className="text-xl font-bold underline mb-3"
            >
              Name: {countrie?.name?.common}
            </Link>
            <p className="text-lg">
              <span className="font-bold">Capital:</span> {countrie?.capital}
            </p>
            <p className="text-lg">
              <span className="font-bold">Population:</span>{" "}
              {countrie?.population}
            </p>
            <p className="text-lg">
              <span className="font-bold">Region:</span> {countrie?.region}
            </p>
            <img
              src={countrie?.flags?.svg}
              alt={countrie?.common?.name + " flag"}
              width={100}
              className="my-4"
            />
          </div>
        );
      })}
    </section>
  );
}

export default Countries;
