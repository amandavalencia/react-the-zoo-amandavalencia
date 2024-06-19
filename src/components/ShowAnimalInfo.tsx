import { useState } from "react";
import { IZooResponse } from "../models/IZooResponse";

interface animalInfoProps {
  animalInfo: IZooResponse;
  feedAnimal: (animal: IZooResponse) => void;
}
export const ShowAnimalInfo = ({ animalInfo, feedAnimal }: animalInfoProps) => {
  const [isFed, setIsFed] = useState(animalInfo.isFed);

  const lastFed = new Date(animalInfo.lastFed)
  const currentTime = new Date();
  const hoursSinceLastFed = ((currentTime.getTime()) - (lastFed.getTime())) /3600000

  if(hoursSinceLastFed>=3){
    feedAnimal(animalInfo)
  }

  const handleFeed = () => {
    feedAnimal(animalInfo);
    setIsFed(!isFed);
  };
  

  return (
    <>
      <h3>{animalInfo.name}</h3>
      <img src={animalInfo.imageUrl} alt={animalInfo.name} />
      <p>{animalInfo.longDescription}</p>
      {isFed && <div>jag blev matad: {animalInfo.lastFed}</div>}
      <button onClick={handleFeed} disabled={animalInfo.isFed === true}>
        Feed me
      </button>
    </>
  );
};
