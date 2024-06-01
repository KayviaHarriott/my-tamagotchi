import { Box } from "@mui/material";
import "./App.css";
import "./styles/sprite.css";
import { Stats } from "./components/Stats";
import { Commands } from "./components/Commands";
import { useEffect, useState } from "react";
import { fetchPetById, updatePetById } from "./services/PetsServices";
import { Pet } from "./models/Pet";
import { PetSprite } from "./components/Pet";
// import hamster_idle from "/assets/images/pets/hamster_idle.png";
// import spriteSheet from './assets/images/pets/hamster_idle.png';

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

  const handleUpdatePetData = async (
    id: number,
    field: string,
    points: number
  ) => {
    if (!petData) return;

    try {
      let updatedFields: Partial<Pet> = {};
      //add preventative to go over 100
      switch (field) {
        case "/food":
          petData.hunger_level! <= 101
            ? (updatedFields = { hunger_level: petData.hunger_level + points })
            : null;
          break;
        case "/drink":
          petData.thirst_level <= 101
            ? (updatedFields = { thirst_level: petData.thirst_level + points })
            : null;
          break;
        case "/trick":
          updatedFields = {
            hunger_level: petData.hunger_level - points,
            thirst_level: petData.thirst_level - points,
          };
          break;
      }

      await updatePetById(id, updatedFields);
      setPetData((prevState: Pet | undefined) => ({
        ...(prevState || ({} as Pet)),
        ...updatedFields,
      }));
    } catch (error) {
      console.error("Error updating pet data:", error);
    }
  };

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
                  <PetSprite/>
                  {/* <img
                    className="w-[640px] h-[100px]"
                    // hamster sprite
                    src={hamster_idle}
                  /> */}
                </Box>
              </div>
              <div className="w-full flex flex-col justify-between">
                <div>
                  <p>Commands</p>
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
                  thirst_level={petData && petData.thirst_level}
                />
              </div>
            </Box>
            <Box className="flex flex-col gap-4 pt-4 pl-4">
              {/* ToDo: Make a backpack where the items fall out */}
              <Commands updatePetData={handleUpdatePetData} />
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
