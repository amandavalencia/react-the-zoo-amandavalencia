import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { ShowAnimalInfo } from "../components/ShowAnimalInfo";

export const Animal = () => {
  const { animalId } = useParams();
  const {
    animals: { animals },
    feedAnimal,
  } = useFetch();

  const animal = animals.find((animal) => animal.id === Number(animalId));

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <ShowAnimalInfo
      animalInfo={animal}
      feedAnimal={feedAnimal}
    ></ShowAnimalInfo>
  );
};
