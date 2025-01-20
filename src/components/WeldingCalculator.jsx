import React, { useState } from "react";

const WeldingCalculator = () => {
  const [vesselDiameter, setVesselDiameter] = useState("");
  const [vesselLength, setVesselLength] = useState("");
  const [vesselThickness, setVesselThickness] = useState("");
  const [longitudinalSeams, setLongitudinalSeams] = useState("");
  const [circumferentialSeams, setCircumferentialSeams] = useState("");

  const [longitudinalRootGap, setLongitudinalRootGap] = useState("");
  const [longitudinalBevelAngle, setLongitudinalBevelAngle] = useState("");
  const [longitudinalRootFace, setLongitudinalRootFace] = useState("");
  const [longitudinalWeldType, setLongitudinalWeldType] = useState("Single V");

  const [circumferentialRootGap, setCircumferentialRootGap] = useState("");
  const [circumferentialBevelAngle, setCircumferentialBevelAngle] =
    useState("");
  const [circumferentialRootFace, setCircumferentialRootFace] = useState("");
  const [circumferentialWeldType, setCircumferentialWeldType] =
    useState("Single V");

  const [nozzleRootGap, setNozzleRootGap] = useState("");
  const [nozzleBevelAngle, setNozzleBevelAngle] = useState("");
  const [nozzleRootFace, setNozzleRootFace] = useState("");
  const [nozzleWeldType, setNozzleWeldType] = useState("Single V");

  const weldTypes = ["Single V", "Double V", "Groove", "Fillet"];

  const handleCalculate = () => {
    console.log("Calculating...", {
      vesselDiameter,
      vesselLength,
      vesselThickness,
      longitudinalSeams,
      circumferentialSeams,
      longitudinalRootGap,
      longitudinalBevelAngle,
      longitudinalRootFace,
      longitudinalWeldType,
      circumferentialRootGap,
      circumferentialBevelAngle,
      circumferentialRootFace,
      circumferentialWeldType,
      nozzleRootGap,
      nozzleBevelAngle,
      nozzleRootFace,
      nozzleWeldType,
    });
  };

  const renderWeldDiagram = (weldType) => {
    return <div className="weld-diagram">{weldType} Diagram (Placeholder)</div>; // Replace with actual diagrams
  };

  return (
    <div className="container">
      <h1>Welding Electrode Calculator</h1>

      <div className="section">
        <h2 className={"card-header"}>Welding Deposition Calculator</h2>
        <div className="input-grid">
          <input
            type="text"
            placeholder="Vessel Inside Diameter (mm)"
            value={vesselDiameter}
            onChange={(e) => setVesselDiameter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Vessel Length (mm)"
            value={vesselLength}
            onChange={(e) => setVesselLength(e.target.value)}
          />
          <input
            type="text"
            placeholder="Vessel Thickness (mm)"
            value={vesselThickness}
            onChange={(e) => setVesselThickness(e.target.value)}
          />
          <input
            type="text"
            placeholder="No of Longitudinal Seams"
            value={longitudinalSeams}
            onChange={(e) => setLongitudinalSeams(e.target.value)}
          />
          <input
            type="text"
            placeholder="No of Circumferential Seams"
            value={circumferentialSeams}
            onChange={(e) => setCircumferentialSeams(e.target.value)}
          />
        </div>
      </div>

      {[
        {
          title: "Longitudinal Seam",
          rootGap: longitudinalRootGap,
          setRootGap: setLongitudinalRootGap,
          bevelAngle: longitudinalBevelAngle,
          setBevelAngle: setLongitudinalBevelAngle,
          rootFace: longitudinalRootFace,
          setRootFace: setLongitudinalRootFace,
          weldType: longitudinalWeldType,
          setWeldType: setLongitudinalWeldType,
        },
        {
          title: "Circumferential Seam",
          rootGap: circumferentialRootGap,
          setRootGap: setCircumferentialRootGap,
          bevelAngle: circumferentialBevelAngle,
          setBevelAngle: setCircumferentialBevelAngle,
          rootFace: circumferentialRootFace,
          setRootFace: setCircumferentialRootFace,
          weldType: circumferentialWeldType,
          setWeldType: setCircumferentialWeldType,
        },
        {
          title: "Nozzle",
          rootGap: nozzleRootGap,
          setRootGap: setNozzleRootGap,
          bevelAngle: nozzleBevelAngle,
          setBevelAngle: setNozzleBevelAngle,
          rootFace: nozzleRootFace,
          setRootFace: setNozzleRootFace,
          weldType: nozzleWeldType,
          setWeldType: setNozzleWeldType,
        },
      ].map((section, index) => (
        <div key={index} className="section weld-section">
          <h2 className={"card-header"}>{section.title}</h2>
          <div className="input-grid">
            <input
              type="text"
              placeholder="Root Gap (mm)"
              value={section.rootGap}
              onChange={(e) => section.setRootGap(e.target.value)}
            />
            <input
              type="text"
              placeholder="Bevel Angle (deg)"
              value={section.bevelAngle}
              onChange={(e) => section.setBevelAngle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Root Face (mm)"
              value={section.rootFace}
              onChange={(e) => section.setRootFace(e.target.value)}
            />
          </div>
          <div className="radio-group">
            {weldTypes.map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name={section.title}
                  value={type}
                  checked={section.weldType === type}
                  onChange={(e) => section.setWeldType(e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
          {renderWeldDiagram(section.weldType)}
        </div>
      ))}

      <button onClick={handleCalculate} className="calculate-button">
        Calculate
      </button>

      <style jsx>{`
        .container {
          font-family: sans-serif;
          padding: 20px;
          width: 100%; /* Ensures full width of the viewport */
          margin: 0 auto; /* Centers the container horizontally */
        }

        .section {
          border: 1px solid #ddd;
          padding: 20px;
          width: 100%; /* Ensures sections take full width within container */
          margin-bottom: 20px;
          border-radius: 5px;
          background-color: #f9f9f9;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
        }
        .input-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }
        .input-grid input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .radio-group {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .radio-group label {
          display: flex;
          align-items: center;
        }
        .radio-group input {
          margin-right: 5px;
        }
        .weld-diagram {
          border: 1px dashed #ccc;
          padding: 20px;
          margin-top: 10px;
          text-align: center;
        }
        .calculate-button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .calculate-button:hover {
          background-color: #0056b3;
        }
        .card-header {
          color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default WeldingCalculator;
