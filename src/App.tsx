import { Box } from "@mui/material";
import "./App.css";
import { Stats } from "./components/Stats";
import { Commands } from "./components/Commands";

function App() {
  return (
    <>
      <Box className="w-full h-screen">
        <Box>
          <div className="text-center">
            <p>MiGotchi</p>
            <p>Kay Harriott</p>
          </div>
        </Box>
        <Box className="flex flex-col w-full items-center justify-center pt-[32px]">
          <Box
            sx={{ border: "1px solid black", p: 2 }}
            className="sm:min-w-[500px] min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <p className="text-center">BobbyTv</p>
              <Box className="flex bg-[lightgray] h-[200px]">
                {/* <p>GotchiHere</p> */}
              </Box>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <p>Title</p>
                <div className="flex gap-2 overflow-x-auto">
                  <p>Sleep</p>
                  <p>Wake Up</p>
                  <p>Walk</p>
                </div>
              </div>
              <Stats />
            </div>
          </Box>
          <Box className="flex flex-col gap-4 sm:min-w-[500px] pt-4">
            {/* ToDo: Make a backpack where the items fall out */}
            <Commands />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
