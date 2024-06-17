import { IZooResponse } from "../models/IZooResponse"

interface animalInfoProps {
    animalInfo: IZooResponse;
}
export const ShowAnimalInfo = ({animalInfo}: animalInfoProps) =>{


    return <>
        <h3>{animalInfo.name}</h3>
        <img src={animalInfo.imageUrl} alt={animalInfo.name} />
        <p>{animalInfo.longDescription}</p>
        <button>Feed me</button>
    </>
}