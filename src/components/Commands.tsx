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
          label: "Sunflower See",
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

      <div className="flex flex-col gap-2">
        {commands.map((item, index) => (
          <div key={index}>
            <p className="font-bold">{item.label}</p>
            <div className="flex gap-2">
              {/* TODO: Seperate drinks from food */}
              {item.actions.map((item, index) => (
                <p key={index}>{item.label}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
