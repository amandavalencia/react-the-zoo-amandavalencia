import { useEffect, useState } from "react";
import { IZooResponse } from "../models/IZooResponse";

export const useFetch = () => {
  const [animals, setAnimals] = useState<IZooResponse[]>([]);

  useEffect(() => {
    if (animals.length > 0) return;
    const getData = async () => {
        const response = await fetch(
          "https://animals.azurewebsites.net/api/animals"
        );
        const data: IZooResponse[] = await response.json();
        setAnimals(data);
      };
      getData()
      
  });

  console.log(animals);
  return animals
};
