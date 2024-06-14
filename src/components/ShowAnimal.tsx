import { IZooResponse } from "../models/IZooResponse";

interface IAnimalProps {
  animal: IZooResponse;
}

export const ShowAnimal = ({ animal }: IAnimalProps) => {
  return (
    <>
      <div>
        <h1>{animal.name}</h1>
        <img src={animal.imageUrl} alt={animal.name} />
      </div>
    </>
  );
};
