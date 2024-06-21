import { IZooResponse } from "../models/IZooResponse";

export const feedingTime = (animal: IZooResponse) => {
  const lastFed = new Date(animal.lastFed);
  const currentTime = new Date();
  const hoursSinceLastFed = (currentTime.getTime() - lastFed.getTime()) / 3600000;
  return hoursSinceLastFed >= 3;
};

