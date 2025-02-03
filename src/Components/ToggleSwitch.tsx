import { useState } from "react";
import onImg from "../assets/on.jpg";
import offImg from "../assets/off.jpg";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <div>
      <h2>Status: {isOn == true ? "ON" : "OFF"}</h2>
      <div>
        <img
          src={isOn ? onImg : offImg}
          alt=""
          width="180px"
          onClick={() => setIsOn(!isOn)}
        />
      </div>
    </div>
  );
};
export default ToggleSwitch;
