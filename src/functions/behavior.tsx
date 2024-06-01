import { useEffect, useState } from "react";

export const Behaviour = () => {
  const [healthStat, updateHealthState] = useState(0);
  const [happinessStat, updateHappinessState] = useState(0);
  const [bellyStat, updateBellyState] = useState(0);
  const [thirstStat, updateThirstState] = useState(0);
  const [bathroomStat, updateBathroomState] = useState(0);
  const [tiredStat, updateTiredStat] = useState(0);
  const [likes, updateLikes] = useState(["carrot"]);
  const [dislikes, updateDislikes] = useState(["bean"]);
  const [allergies, updateAllergies] = useState([]);
    const [bellyTimer, setBellyTimer] = useState(0);

  useEffect(() => {
    const bellyTime = setInterval(() => {
      console.log("Belly timer");
        setBellyTimer((prevCount) => prevCount + 1)
    }, 5000);

    return () => clearInterval(bellyTimer)
  }, []);
  //Health
  //idle--

  //Happiness
  //idle--

  //Belly
  //idle-- depletes 1 every 8 mins
  //if action is food, fill belly by points
  //if in dislike, bring down happiness
  //if in likes, bring up happiness

  //Thirst
  //idle-- depletes 1 every 14 mins
  //if action is drink, fill thirst by points
  //if in dislike, bring down happiness
  //if in likes, bring up happiness
  //bathroom behaviour depelete 2 for every 10 thirst given

  //Bathroom
  //idle-- depletes 1 every 8 mins

  //Sleep
  //idle-- deplete by 1 every 14 mins awake

  //bathroom behaviour depletes 2 for every 10 thirst given

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="font-bold">Health</p>
        <p>Percentage: {healthStat}</p>
      </div>
      <div>
        <p className="font-bold">Happiness</p>
        <p>Percentage: {happinessStat}</p>
      </div>
      <div>
        <p className="font-bold">Belly</p>
        <p>Percentage: {bellyStat}</p>
      </div>
      <div>
        <p className="font-bold">Thirst</p>
        <p>Percentage: {thirstStat}</p>
      </div>
      <div>
        <p className="font-bold">Bathroom</p>
        <p>Percentage: {bathroomStat}</p>
      </div>
      <div>
        <p className="font-bold">Tired</p>
        <p>Percentage: {tiredStat}</p>
      </div>
    </div>
  );
};
