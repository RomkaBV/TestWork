import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./gradientSVG";

export default function ProgressBar() {
  const idCSS = "hello";
  const percentage = 6.4;

  return (
    <div className="">
      <div style={{ height: "120px", width: "120px" }}>
        <GradientSVG />
        <CircularProgressbar
          strokeWidth={8}
          value={percentage}
          maxValue={10}
          text={percentage}
          styles={{
            path: { stroke: `url(#${idCSS})`, height: "100%" },
            trail: {
              stroke: "rgb(0,0,0,40%)",
            },
            text: {
              // Text color
              fill: "#fff",
              // Text size
              fontSize: "30px",
              fontWeight: 900,
            },
          }}
        />
      </div>
    </div>
  );
}
