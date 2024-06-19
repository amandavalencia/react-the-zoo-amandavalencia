import "../styling/showAnimal.scss";
import { IZooResponse } from "../models/IZooResponse";
import { useNavigate } from "react-router-dom";

interface IAnimalProps {
  animal: IZooResponse;
}

export const ShowAnimal = ({ animal }: IAnimalProps) => {

  const navigate = useNavigate()
  const handleClick = () =>{
      navigate("/animal/" + animal.id)
  }
  return (
    <>
      <div className="animalDiv">
        <h2>{animal.name}</h2>
        {animal.isFed && <p>Jag är mätt :)</p>}
        {!animal.isFed && <p>Behöver matas!!</p>}

        <img src={animal.imageUrl} alt={animal.name} />
        <button onClick={handleClick}>Mer information</button>
      </div>
    </>
  );
};
