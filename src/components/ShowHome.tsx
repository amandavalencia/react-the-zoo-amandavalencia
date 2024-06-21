import { useState } from "react";
import { IZooResponse } from "../models/IZooResponse"
import { feedingTime } from "../service/feedingTime";

interface animalsProps{
    animals: IZooResponse[]
}

export const ShowHome =({animals}: animalsProps)=>{
const [animalsNotFedState, setAnimalsNotFedState] = useState<IZooResponse[]>([])

const animalsNotFed = animals.filter((animal) => {
    const isAnimalFed = feedingTime(animal);
    return isAnimalFed;
  });


  if (animalsNotFedState.length !== animalsNotFed.length) {
    setAnimalsNotFedState(animalsNotFed);
  }
 
    return <>
    <h1>Fur-get Me Not</h1>
    <p>Välkommen tillbaka!</p>
    <p>du har {animalsNotFedState.length} djur som inte är matade!</p>
    </>
}