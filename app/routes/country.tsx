import React from "react";
import type { Route } from "./+types/country";


export async function clientLoader({ params }: Route.LoaderArgs) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`
  );
  const data = await response.json();
  return data;
}

function Country({ loaderData }: Route.ComponentProps) {
  
  const country = {
    name: loaderData[0].name.common,
    capital: loaderData[0].capital,
    officialName: loaderData[0].name.official,
    region: loaderData[0].region,
    subregion: loaderData[0].subregion,
    population: loaderData[0].population,
    flag: loaderData[0]?.flags?.svg,
  };

  return (
    <div className="flex flex-col border-2 border-gray-200 p-4 shadow-md max-w-60 bg-gray-200">
      <p className="text-xl font-bold underline mb-3">Name: {country?.name}</p>
      <p className="text-lg">
        <span className="font-bold">Capital:</span> {country?.capital}
      </p>
      <p className="text-lg">
        <span className="font-bold">Population:</span> {country?.population}
      </p>
      <p className="text-lg">
        <span className="font-bold">Region:</span> {country?.region}
      </p>
      <img
        src={country?.flag}
        alt={country?.name + " flag"}
        width={100}
        className="my-4"
      />
    </div>
  );
}

export default Country;
