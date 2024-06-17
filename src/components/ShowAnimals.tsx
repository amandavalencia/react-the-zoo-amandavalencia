import "../styling/showAnimals.scss"
import { ShowAnimal } from "../components/ShowAnimal";
import { IZooResponse } from "../models/IZooResponse";
interface IShowAnimalProps {
  animals: IZooResponse[];
}

export const ShowAnimals = ({ animals }: IShowAnimalProps) => {

  return (
    <>
      <h1>Animals</h1>
      <div className="animalsDiv" >
        {animals.map((animal) => (
          <ShowAnimal animal={animal} key={animal.id} />
        ))}
      </div>
    </>
  );
};
