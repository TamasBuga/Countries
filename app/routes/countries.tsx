import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) throw new Error("Fetching error!");
  return response.json();
};

function Countries() {
  const { data } = useQuery({
    queryKey: ["countrie"],
    queryFn: fetchCountries,
  });
  
 
  return (
    <section className="flex flex-wrap p-4 gap-4 bg-gray-400">
      {data?.map((countrie: any, index: number) => {
        return (
          <div key={index} className="flex flex-col border-2 border-gray-200 p-4 shadow-md max-w-60 bg-gray-200">
            <p className="text-xl font-bold underline">{countrie?.name?.common}</p>
            <p className="text-lg">{countrie?.capital}</p>
            <p className="text-lg">{countrie?.region}</p>
            <img src={countrie?.flags?.svg} alt={countrie?.common?.name + " flag"} width={200} />
          </div>
        )
      })}
    </section>
  )
}

export default Countries;
