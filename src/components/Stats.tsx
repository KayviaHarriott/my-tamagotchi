import { ProgressBar } from "./ProgressBar";
interface StatsProps {
  health_level: number | undefined;
  happiness_level: number | undefined;
  hunger_level: number | undefined;
  bathroom_level: number | undefined;
}
export const Stats: React.FC<StatsProps> = ({
  happiness_level,
  health_level,
  hunger_level,
  bathroom_level,
}) => {
  const stats = [
    {
      label: "Health",
      progress: health_level,
    },
    {
      label: "Happiness",
      progress: happiness_level,
    },
    //Level ?
  ];
  const secondaryStats = [
    {
      label: "Hunger",
      progress: hunger_level,
    },
    {
      label: "Bathroom",
      progress: bathroom_level,
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
                <ProgressBar progress={item.progress ? item.progress : 0} />
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
                <ProgressBar progress={item.progress ? item.progress : 0} />
              </div>
            ))}
          </div>
        </>
      </div>
    </>
  );
};
