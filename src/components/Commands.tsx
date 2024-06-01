import { Box } from "@mui/material";
import { TemporaryPopUp } from "./TemporaryPopUp";
// import { useState } from "react";
// import { Pet } from "../models/Pet";

interface CommandsProps {
  updatePetData: (id: number, field: string, points: number) => void;
}

export const Commands: React.FC<CommandsProps> = ({ updatePetData }) => {
  const commands = [
    {
      label: "Feed",
      actions: [
        {
          label: "Carrot",
          action: "/food",
          buttonLabel: "Feed",
          icon: "/assets/images/food/carrot.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 6,
        },
        {
          label: "Bean",
          action: "/food",
          buttonLabel: "Feed",
          icon: "/assets/images/food/bean.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 3,
        },
        {
          label: "Sunflower Seed",
          action: "/food",
          buttonLabel: "Feed",
          icon: "/assets/images/food/sunflower_seed.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 8,
        },
        {
          label: "Water",
          action: "/drink",
          buttonLabel: "Feed",
          icon: "/assets/images/food/water.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Nutrient Water",
          action: "/drink",
          buttonLabel: "Feed",
          icon: "/assets/images/food/nutrient_water.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 10,
        },
      ],
    },
    {
      label: "Actions",
      actions: [
        {
          label: "Pet",
          action: "/action",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Talk To",
          action: "/action",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
      ],
    },
    {
      label: "Tricks",
      actions: [
        {
          label: "Sit",
          action: "/trick", //"/sit",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Speak",
          action: "/trick", // "/speak",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Roll Over",
          action: "/trick",  //"/roll-over",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 5,
        },
      ],
    },
  ];

  return (
    <div>
      {/* <h3 className="text-[14px] font-bold text-[gray]">Commands</h3> */}
      <div className="flex flex-col gap-2 ">
        {commands.map((item, index) => (
          <div key={index}>
            <h4 className="font-bold">{item.label}</h4>
            <div className="flex gap-2">
              {item.actions.map((action, index) => (
                <Box
                  key={index}
                  sx={{
                    borderRadius: 1,
                  }}
                  className="flex flex-col justify-between gap-2 p-2 cursor-pointer"
                  onClick={() => updatePetData(1, action.action, action.point)}
                >
                  <TemporaryPopUp
                    content={
                      <div className="flex flex-col items-center">
                        <p>
                          {action.icon ? (
                            <img className="w-[24px]" src={`${action.icon}`} alt={action.label} />
                          ) : (
                            "I"
                          )}
                        </p>
                        <h5 className="text-[12px] font-medium text-center pt-1 text-[#286BB9]">
                          {action.label}
                        </h5>
                      </div>
                    }
                  />
                </Box>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
