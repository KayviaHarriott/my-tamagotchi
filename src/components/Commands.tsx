import {
  Box,
  // Button
} from "@mui/material";
import { TemporaryPopUp } from "./TemporaryPopUp";

export const Commands = () => {
  const commands = [
    {
      label: "Food",
      actions: [
        {
          label: "Carrot",
          action: "/food",
          buttonLabel: "Feed",
          icon: "/assets/images/food/carrot.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Bean",
          action: "/food",
          buttonLabel: "Feed",
          icon: "/assets/images/food/bean.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Sunflower Seed",
          action: "/food",
          buttonLabel: "Feed",
          icon: "/assets/images/food/sunflower_seed.png",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
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
          point: 1,
        },
      ],
    },
    {
      label: "Actions",
      actions: [
        {
          label: "Pet",
          action: "/food",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Talk To",
          action: "/food",
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
          action: "/sit",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Speak",
          action: "/speak",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
        {
          label: "Roll Over",
          action: "/roll-over",
          buttonLabel: "Do",
          icon: "",
          against: "", //TODO: If gotchi feels a way, not to feed
          point: 1,
        },
      ],
    },
  ];
  return (
    <div>
      <h3 className="text-[14px] font-bold text-[gray]">Commands</h3>
      <div className="flex flex-col gap-2 ">
        {" "}
        {/* overflow-x-auto bg-[lightgray]"> */}
        {commands.map((item, index) => (
          <div key={index}>
            <h4 className="font-bold">{item.label}</h4>
            <div className="flex gap-2">
              {/* TODO: Seperate drinks from food */}
              {item.actions.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    // backgroundColor: "#F2FDFF",
                    borderRadius: 1,
                  }}
                  className="flex flex-col justify-between gap-2 p-2 cursor-pointer"
                  onClick={() => console.log(item.point)}
                >
                  <TemporaryPopUp
                    content={
                      <div className="flex flex-col items-center">
                        <p>
                          {item.icon ? (
                            <img className="w-[24px]" src={`${item.icon}`} />
                          ) : (
                            "I"
                          )}
                        </p>
                        <h5 className="text-[12px] font-medium text-center pt-1 text-[#286BB9]">
                          {item.label}
                        </h5>
                      </div>
                    }
                  />

                  {/* <Button
                    variant="contained"
                    sx={{ boxShadow: "none", textTransform: "none" }}
                  >
                    {item.buttonLabel}
                  </Button> */}
                </Box>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
