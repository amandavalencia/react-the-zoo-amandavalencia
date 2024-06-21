import "../styling/showAnimal.scss";
import { IZooResponse } from "../models/IZooResponse";
import { useNavigate } from "react-router-dom";
import { feedingTime } from "../service/feedingTime";

interface IAnimalProps {
  animal: IZooResponse;
}

export const ShowAnimal = ({ animal }: IAnimalProps) => {

  const isAnimalFed = feedingTime(animal)

  const navigate = useNavigate()
  const handleClick = () =>{
      navigate("/animal/" + animal.id)
  }
  return (
    <>
      <div className="animalDiv">
        <h2>{animal.name}</h2>
        {!isAnimalFed && <p>Jag är mätt</p>}
        {isAnimalFed && <p>Behöver matas!!</p>}

        <img src={animal.imageUrl} alt={animal.name} />
        <button onClick={handleClick}>Mer information</button>
      </div>
    </>
  );
};
