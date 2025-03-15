"use client";

import { useState, useEffect } from "react";
import GanttChart from "./GanttChart";
import { PDF } from "../utilities/PDF";
import { generateProcesses } from "../utilities/processGenerator";
import { Process, Result } from "../types/process";
import { FirstInFirstOut } from "../algorithms/fifo";
import { sjf } from "../algorithms/sjf";
import { rr } from "../algorithms/rr";
import { stcf } from "../algorithms/stcf";
import { mlfq } from "../algorithms/mlfq";

export default function Home() {
  const algorithms = [
    { name: "FIFO", value: "FIFO" },
    { name: "SJF", value: "SJF" },
    { name: "RR", value: "RR" },
    { name: "STCF", value: "STCF" },
    { name: "MLFQ", value: "MLFQ" }
  ];

  const [numProcesses, setNumProcesses] = useState<number>(5);
  const [quantum, setQuantum] = useState<number>(3);
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<string[]>([]);
  const [processes, setProcesses] = useState<Process[]>([]);
  const [results, setResults] = useState<{ [key: string]: Result }>({});

  useEffect(() => {
    const generatedProcesses = generateProcesses(numProcesses);
    console.log("Generated Processes:", generatedProcesses); // Debugging log
    setProcesses(generatedProcesses);
  }, [numProcesses]);

  useEffect(() => {
    const newResults: { [key: string]: Result } = {};

    selectedAlgorithms.forEach((algorithm) => {
      let resultFromAlgorithm: Result = { timeline: [], AverageWaitTime: 0, AverageTurnAroundTime: 0 };

      if (algorithm === 'FIFO') {
        resultFromAlgorithm = FirstInFirstOut(processes);
      } else if (algorithm === 'SJF') {
        resultFromAlgorithm = sjf(processes);
      } else if (algorithm === 'RR') {
        resultFromAlgorithm = rr(processes, quantum);
      } else if (algorithm === 'STCF') {
        resultFromAlgorithm = stcf(processes);
      } else if (algorithm === 'MLFQ') {
        resultFromAlgorithm = mlfq(processes);
      }

      console.log(`Result for ${algorithm}:`, resultFromAlgorithm); // Debugging log
      newResults[algorithm] = resultFromAlgorithm;
    });

    setResults(newResults);
  }, [selectedAlgorithms, processes, quantum]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAlgorithms([...selectedAlgorithms, value]);
    } else {
      setSelectedAlgorithms(selectedAlgorithms.filter(algorithm => algorithm !== value));
    }
  };

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
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", textAlign: "center"}}
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

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {algorithms.map((algorithm) => (
          <label key={algorithm.value} style={{ display: "block", margin: "5px 0", color: "#FFFFFF" }}>
            <input
              type="checkbox"
              value={algorithm.value}
              checked={selectedAlgorithms.includes(algorithm.value)}
              onChange={handleCheckboxChange}
            />
            {algorithm.name}
          </label>
        ))}
      </div>

      {selectedAlgorithms.map((algorithm) => (
        <GanttChart
          key={algorithm}
          algorithm={algorithm}
          result={results[algorithm]}
        />
      ))}
    </div>
  );
}