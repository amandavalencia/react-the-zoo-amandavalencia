import { useEffect, useState } from "react";
import { IZooResponse } from "../models/IZooResponse";
import axios from "axios";

export const useFetch = () => {
  const [animals, setAnimals] = useState<IZooResponse[]>([]);

  const getData = async (id:string) => {
    const response = await axios.get<IZooResponse[]>(
      "https://animals.azurewebsites.net/api/animals/" + id
    );
    setAnimals(response.data);
  };

  useEffect(() => {
    if (animals.length > 0) return;
    const getAnimals = async () => {
      await getData("");
    };
    getAnimals();
  });

  return { animals, getData };
};
