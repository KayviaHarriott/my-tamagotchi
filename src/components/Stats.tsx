import { ProgressBar } from "./ProgressBar";

export const Stats = () => {
  const stats = [
    {
      label: "Health",
      progress: 100,
    },
    {
      label: "Happiness",
      progress: 70,
    },
    //Level ?
  ];
  const secondaryStats = [
    {
      label: "Hunger",
      progress: 70,
    },
    {
      label: "Bathroom",
      progress: 70,
    },
  ];
  return (
    <>
      <div className="pt-2">
       <>
          <h3 className="font-bold text-[grey] text-[14px]">Stats</h3>
          <div className="flex gap-2">
            {stats.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <h4 className="font-semibold text-[12px]">{item.label}</h4>
                <ProgressBar progress={item.progress} />
              </div>
            ))}
          </div>
       </>
       <>
          {/* <h3 className="font-bold text-[grey] text-[14px]">Stats</h3> */}
          <div className="flex gap-2 pt-4">
            {secondaryStats.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <h4 className="font-semibold text-[12px]">{item.label}</h4>
                <ProgressBar progress={item.progress} />
              </div>
            ))}
          </div>
       </>
      </div>
    </>
  );
};
