import "../styling/showAnimal.scss"
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
        <h1>{animal.name}</h1>
        <img src={animal.imageUrl} alt={animal.name} />
        <button onClick={handleClick}>More information</button>
      </div>
    </>
  );
};
