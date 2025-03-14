"use client";

import { useState } from "react";
import GanttChart from "./GanttChart";
import { PDF } from "../utilities/PDF";

export default function Home(){
  const algorithms = [
    { name: "FIFO", value: "FIFO" },
    { name: "SJF", value: "SJF" },
    { name: "RR", value: "RR" },
    { name: "STCF", value: "STCF" },
    { name: "MLFQ", value: "MLFQ" }
  ]

  const [numProcesses, setNumProcesses] = useState<number>(5);
  const [quantum, setQuantum] = useState<number>(3);
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAlgorithms([...selectedAlgorithms, value]);
    }
    else
    {
      setSelectedAlgorithms(selectedAlgorithms.filter(algorithms => algorithms !== value));
    }}

  return (
    <div style={{ padding: "0px", backgroundColor: "#392929", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff" }}>Gantt Chart</h1>
      <p style={{ color: "#bbb" }}>Shows processes</p>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label htmlFor="numProcesses" style={{ color: "#fff", marginRight: "10px" }}>Number of Processes:</label>
        <input
          id="numProcesses"
          type="number"
          value={numProcesses}
          onChange={(e) => setNumProcesses(Number(e.target.value))}
          style={{ padding: "5px", width: "50px" }}
        />
      </div>
        {
          algorithms.map((algorithm) => (
            <label key={algorithm.value} style={{display: "block", margin: "5px 0"}}>
              <input
                type="checkbox"
                value={algorithm.value}
                checked={selectedAlgorithms.includes(algorithm.value)}
                onChange={handleCheckboxChange}
              />
              {algorithm.name}
            </label>
          ))
        }
        <p>Selcted Algorithms: {selectedAlgorithms.join(", ")}</p>
      <div>

      </div>

      <button
        onClick={() => PDF("Gantt Chart Results", document.getElementById("gantt-table"))}
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Generate PDF
      </button>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label htmlFor="quantum" style={{ color: "#fff", marginRight: "10px" }}>Quantum (for RR):</label>
        <input
          id="quantum"
          type="number"
          value={quantum}
          onChange={(e) => setQuantum(Number(e.target.value))}
          style={{ padding: "5px", width: "50px" }}
        />
      </div>
      <GanttChart numProcesses={numProcesses} quantum={quantum} />
    </div>
  );
  }