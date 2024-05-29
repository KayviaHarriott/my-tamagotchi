import axios from "axios";
import { Pet } from "../models/Pet";

const base_url = "http://localhost:8000"; // Replace this with your actual API URL
// Function to fetch pet data from the API
export const fetchPetData = async (id: number): Promise<Pet> => {
  try {
    const response = await axios.get(`${base_url}/api/pets/${id}/?format=json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pet data:", error);
    throw error;
  }
};

// import axios from 'axios';

export const updateHunger = async (id: number, newHunger: number) => {
  try {
    //TODO: Add partial update, 
    console.log(newHunger ? "" : "")
    const data = await axios
      .get("http://localhost:8000/api/pets/1/?format=json")
      .then((r) => r.data);
    console.log(data);
    await axios.put(`http://localhost:8000/api/pets/${id}/`, {
      id: 1,
      name: "Bobby",
      species: "Hamster",
      age: 2,
      status: "DEAD",
      health_level: 100,
      hunger_level: 100,
      happiness_level: 100,
      bathroom_level: 100,
      friendliness: 90,
    });

    console.log(data);

    console.log("Hunger updated successfully");
  } catch (error) {
    console.error("Error updating hunger:", error);
  }
};
