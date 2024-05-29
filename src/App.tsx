import { Box } from "@mui/material";
import "./App.css";
import { Stats } from "./components/Stats";
import { Commands } from "./components/Commands";
import { useEffect, useState } from "react";
import {
  fetchPetById,
  // updatePetById,
  // fetchPets,
  // updateHunger
} from "./services/PetsServices";
import { Pet } from "./models/Pet";

function App() {
  const [petData, setPetData] = useState<Pet | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPetById(1);
       
        setPetData(response);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box className="w-full ">
        <Box>
          <div className="text-center">
            <p>MiGotchi</p>
            <p>Kay Harriott</p>
          </div>
        </Box>
        <Box className="flex flex-row justify-center items-center w-[100%] pt-[32px] ">
          <Box className="flex flex-col lg:flex-row">
            <Box
              sx={{ border: "1px solid black", p: 2 }}
              className="sm:min-w-[500px] min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <p className="text-center">BobbyTv</p>
                <Box className="flex bg-[lightgray] h-[200px]">
                  {/* <p>GotchiHere</p> */}
                  <img
                    className="w-[64px] h-[64px]"
                    src={`/assets/images/pets/hamster.png`}
                  />
                </Box>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <p>Management</p>
                  <div className="flex gap-2 overflow-x-auto">
                    <p>Sleep</p>
                    <p>Wake Up</p>
                    <p>Walk</p>
                  </div>
                </div>

                <Stats
                  happiness_level={petData && petData.happiness_level}
                  health_level={petData && petData.health_level}
                  hunger_level={petData && petData.hunger_level}
                  bathroom_level={petData && petData.bathroom_level}
                />
              </div>
            </Box>
            <Box className="flex flex-col gap-4 pt-4 pl-4">
              {/* ToDo: Make a backpack where the items fall out */}
              <Commands />
            </Box>
          </Box>
        </Box>
        <Box>
          <p>About</p>
          <p>About the Creator</p>
          <p>Text here</p>
        </Box>
      </Box>
    </>
  );
}

export default App;
