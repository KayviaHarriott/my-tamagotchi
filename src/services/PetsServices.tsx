import axios from "axios";
import { Pet } from "../models/Pet";

const API_URL = import.meta.env.VITE_API_URL;
const PETS_URL = import.meta.env.VITE_PETS;

/**Function to get all pets */
export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/pets`);
    return response;
  } catch (error) {
    console.error("Error fetching pets: ", error);
    throw error;
  }
};

/**Function to get pet by id */
export const fetchPetById = async (id: number): Promise<Pet> => {
  try {
    const response = await axios.get(`${API_URL}/api/pets/${id}/?format=json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pet data:", error);
    throw error;
  }
};

/**Function to update based on id */
export const updatePetById = async (
  id: number,
  newPetData: Partial<Pet> | undefined
) => {
  try {
    //TODO: Add partial update,
    const data = await axios
      .get(`${PETS_URL}/${id}/?format=json`)
      .then((r) => r.data);

    data != null
      ? await axios.patch(`${PETS_URL}/${id}/`, 
          newPetData,
        )
      : null;
    console.log("Hunger updated successfully");
  } catch (error) {
    console.error("Error updating hunger:", error);
  }
};


   // switch(newPetData):
          //   case("happiness_level"):
          //     break
          // newPetData,
          // id: 1,
          // name: "Bobby",
          // species: "Hamster",
          // age: 2,
          // status: "DEAD",
          // health_level: 100,
          // hunger_level: 5,
          // happiness_level: 5,
          // bathroom_level: data.bathroom_level + 1,
          // friendliness: 5,