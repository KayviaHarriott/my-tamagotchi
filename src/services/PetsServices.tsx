import axios from "axios";

const base_url = "http://127.0.0.1:8000"; // Replace this with your actual API URL

export const fetchPetData = async ({ id }: { id: number }) => {
  const response = await axios.get(`${base_url}/api/pets/${id}/?format=json`);
  console.log(response)
  return response.data;
};
