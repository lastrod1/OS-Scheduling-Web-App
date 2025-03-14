"use client";

import { useState } from "react";
import GanttChart from "./GanttChart";
import { PDF } from "../utilities/PDF";

export default function Home() {
  const [numProcesses, setNumProcesses] = useState<number>(5);
  const [quantum, setQuantum] = useState<number>(3);

  return (
    <div style={{ padding: "0px", backgroundColor: "#000000", minHeight: "100vh" }}>
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