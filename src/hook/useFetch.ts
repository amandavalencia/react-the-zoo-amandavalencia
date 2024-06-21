import { useEffect, useState } from "react";
import { IZooResponse } from "../models/IZooResponse";
import axios from "axios";

export interface IAnimalsState {
  animals: IZooResponse[];
  fetchDone: boolean;
}

export const useFetch = () => {
  const myAnimals: IZooResponse[] = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );

  const [animals, setAnimals] = useState<IAnimalsState>({
    animals: myAnimals,
    fetchDone: myAnimals.length > 0,
  });

  const getData = async (id: string) => {
    const response = await axios.get<IZooResponse[]>(
      "https://animals.azurewebsites.net/api/animals/" + id
    );
    localStorage.setItem("animals", JSON.stringify(response.data));
    setAnimals({ fetchDone: true, animals: response.data });
  };


  const feedAnimal = (animal: IZooResponse) => {
    const updatedAnimal = animals.animals.map((updateAnimal) => {
      if (updateAnimal.name === animal.name) {
        return { ...animal, isFed: !animal.isFed, lastFed: Date() };
      } else {
        return updateAnimal;
      }
    });

    localStorage.setItem("animals", JSON.stringify(updatedAnimal));
    setAnimals({ fetchDone: true, animals: updatedAnimal });
  };

  useEffect(() => {
    if (animals.fetchDone) return;
    getData("");
  });

  return { animals, feedAnimal };
};
