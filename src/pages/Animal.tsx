import { useParams } from "react-router-dom";

export const Animal = () => {
  const { animalId } = useParams();

  return (
    <>
      <h1>Ett djur med id: {animalId} </h1>
    </>
  );
};
