"use client";

import { useState, useEffect, useRef } from "react";
import GanttChart from "./GanttChart";
import Table from "./Table";
import BarChart from "./BarChart";
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

  const waitTimeChartRef = useRef<HTMLCanvasElement>(null);
  const turnaroundTimeChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setProcesses(generateProcesses(numProcesses));
  }, [numProcesses]);

  useEffect(() => {
    if (processes.length === 0) return;

    const newResults: { [key: string]: Result } = {};
    selectedAlgorithms.forEach((algorithm) => {
      const processesCopy = JSON.parse(JSON.stringify(processes)); // Deep copy to avoid mutation
      let resultFromAlgorithm: Result = { timeline: [], AverageWaitTime: 0, AverageTurnAroundTime: 0 };

      switch (algorithm) {
        case 'FIFO':
          resultFromAlgorithm = FirstInFirstOut(processesCopy);
          break;
        case 'SJF':
          resultFromAlgorithm = sjf(processesCopy);
          break;
        case 'RR':
          resultFromAlgorithm = rr(processesCopy, quantum);
          break;
        case 'STCF':
          resultFromAlgorithm = stcf(processesCopy);
          break;
        case 'MLFQ':
          resultFromAlgorithm = mlfq(processesCopy);
          break;
      }

      newResults[algorithm] = resultFromAlgorithm;
    });

    setResults(newResults);
  }, [selectedAlgorithms, processes, quantum]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedAlgorithms((prev) =>
      checked ? [...prev, value] : prev.filter((algorithm) => algorithm !== value)
    );
  };

  const handleGeneratePDF = () => {
    PDF(waitTimeChartRef.current, turnaroundTimeChartRef.current);
  };

  return (
    <div style={{ padding: "0px", backgroundColor: "#000000", minHeight: "100vh" }}>
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
        <button
          onClick={handleGeneratePDF}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Generate PDF
        </button>
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

      <Table processes={processes} />
      <BarChart
        results={results}
        waitTimeChartRef={waitTimeChartRef}
        turnaroundTimeChartRef={turnaroundTimeChartRef}
      />

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