import { useEffect, useState } from "react";

type StopLight = "red" | "yellow" | "green";

export default function StopLightComp() {
  const [color, setColor] = useState<StopLight>("red");

  function getLightColor(lightColor: StopLight) {
    return `light ${lightColor} ${lightColor === color ? "active" : ""}`;
  }

  useEffect(() => {
    if (color === "red") {
      setTimeout(() => setColor("yellow"), 3000);
      // red
    } else if (color === "yellow") {
      setTimeout(() => setColor("green"), 3000);
      // yellow
    } else {
      setTimeout(() => setColor("red"), 5000);
      // green
    }
  }, [color]);

  return (
    <div className="container">
      <div className={getLightColor("red")}></div>
      <div className={getLightColor("yellow")}></div>
      <div className={getLightColor("green")}></div>
    </div>
  );
}
