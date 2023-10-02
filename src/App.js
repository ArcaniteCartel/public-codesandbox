import React from "react";
import "./styles.css";
import {
  Line,
  BasisCurve,
  BasisClosedCurve,
  BasisOpenCurve,
  BundleCurve,
  CardinalCurve,
  CardinalClosedCurve,
  CardinalOpenCurve,
  CatmullRomCurve,
  CatmullRomClosedCurve,
  CatmullRomOpenCurve,
  ClosedLine,
  MonotoneXCurve,
  MonotoneYCurve,
  NaturalCurve,
  StepCurve,
  StepAfterCurve,
  StepBeforeCurve
} from "react-svg-curve";

const data = [
  [90, 10],
  [25, 20],
  [50, 75],
  [75, 80],
  [100, 40],
  [125, 30],
  [150, 60],
  [175, 15],
  [105 , 10]
];

export default function App() {
  const [catmullRomAlpha, setCatmullRomAlpha] = React.useState(0.5);
  const [bundleBeta, setBundleBeta] = React.useState(0.85);
  const [cardinalTension, setCardinalTension] = React.useState(0);
  return (
    <>
      <h1>react-svg-curve</h1>
      <div className="grid">





        <div>
          <h3>
            <code children="<CardinalCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CardinalCurve data={data} tension={cardinalTension} />
          </svg>
          <Range
            label="tension"
            max={1}
            value={cardinalTension}
            setValue={setCardinalTension}
          />
        </div>

        <div>
          <h3>
            <code children="<CardinalClosedCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CardinalClosedCurve data={data} tension={cardinalTension} />
          </svg>
          <Range
            label="tension"
            max={1}
            value={cardinalTension}
            setValue={setCardinalTension}
          />
        </div>


      </div>
    </>
  );
}

function Range({ min = 0, max = 1, step = 0.01, value, setValue, label }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <label>{label}: </label>
      <div style={{ width: 50 }}>{value}</div>
      <input
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}
