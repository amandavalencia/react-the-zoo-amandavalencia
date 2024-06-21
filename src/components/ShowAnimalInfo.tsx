import { IZooResponse } from "../models/IZooResponse";
import { feedingTime } from "../service/feedingTime";

interface animalInfoProps {
  animalInfo: IZooResponse;
  feedAnimal: (animal: IZooResponse) => void;
}
export const ShowAnimalInfo = ({ animalInfo, feedAnimal }: animalInfoProps) => {
  const isAnimalFed = feedingTime(animalInfo);

  const handleFeed = () => {
    feedAnimal(animalInfo);
  };
const timeSinceFed = new Date(animalInfo.lastFed)

  return (
    <>
      <h3>{animalInfo.name}</h3>
      <img src={animalInfo.imageUrl} alt={animalInfo.name} />
      <p>{animalInfo.longDescription}</p>
      {!isAnimalFed && <div>Senast matad: {timeSinceFed.toLocaleString()}</div>}
      <button onClick={handleFeed} disabled={!isAnimalFed}>
        Mata {animalInfo.name}
      </button>
    </>
  );
};
