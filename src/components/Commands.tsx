export const Commands = () => {
  const commands = [
    {
      label: "Food",
      actions: [
        {
          label: "Carrot",
          action: "/food",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Bean",
          action: "/food",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Sunflower Seed",
          action: "/food",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Water",
          action: "/drink",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Nutrient Water",
          action: "/drink",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
      ],
    },
    {
      label: "Actions",
      actions: [
        {
          label: "Pet",
          action: "/food",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Talk To",
          action: "/food",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
      ],
    },
    {
      label: "Tricks",
      actions: [
        {
          label: "Sit",
          action: "/sit",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Speak",
          action: "/speak",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
        {
          label: "Roll Over",
          action: "/roll-over",
          against: "", //TODO: If gotchi feels a way, not to feed
        },
      ],
    },
  ];
  return (
    <div>
      <h3 className="text-[14px] font-bold text-[gray]">Commands</h3>
      <div className="flex flex-col gap-2 h-[120px]"> {/* overflow-x-auto bg-[lightgray]"> */}
        {commands.map((item, index) => (
          <div key={index}>
            <h4 className="font-bold">{item.label}</h4>
            <div className="flex gap-2">
              {/* TODO: Seperate drinks from food */}
              {item.actions.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p>I</p>
                  <h5 className="text-[12px]">{item.label}</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
