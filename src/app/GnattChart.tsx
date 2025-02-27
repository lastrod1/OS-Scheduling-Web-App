"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { generateProcesses } from "../utilities/processGenerator";
import { Process, Result } from "../types/process";
import { FirstInFirstOut } from "../algorithms/fifo";
import { sjf } from "../algorithms/sjf";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GanttChart = () => {
  const [result, setResult] = useState<Result | null>(null);
  const [algorithm, setAlgorithm] = useState<string>('FIFO');
  const [processes, setProcesses] = useState<Process[]>([]);

  useEffect(() => {
    const generatedProcesses = generateProcesses(10);
    setProcesses(generatedProcesses);
    let resultFromAlgorithm: Result = { timeline: [], AverageWaitTime: 0, AverageTurnAroundTime: 0 };

    if (algorithm === 'FIFO') {
      resultFromAlgorithm = FirstInFirstOut(generatedProcesses);
    } else if (algorithm === 'SJF') {
      resultFromAlgorithm = sjf(generatedProcesses);
    }

    setResult(resultFromAlgorithm); // Set result from the selected algorithm
  }, [algorithm]);

  const generateGanttChartData = (result: Result) => {
    const labels: string[] = [];
    const data: { x: [number, number]; y: string }[] = [];

    let lastTime = 0;

    result.timeline.forEach((entry) => {
      const processId = entry.process;
      const currentTime = entry.time;

      const label = `P${processId}`;

      // Add process label to the list if not already added
      if (!labels.includes(label)) {
        labels.push(label);
      }

      data.push({
        x: [lastTime, currentTime],
        y: label,
      });

      lastTime = currentTime;
    });

    return { labels, data };
  };

  const chartData = (result: Result | null) => {
    if (!result) return { labels: [], datasets: [] }; // Ensure result is available

    const { labels, data } = generateGanttChartData(result);

    return {
      labels,
      datasets: [
        {
          label: "Process Execution Time",
          data,
          backgroundColor: "#ffa600", // Blue color
          borderColor: "#fff",
          borderWidth: 1,
          barThickness: 20,
        },
      ],
    };
  };

  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: "y",
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const { raw } = context;
            return `Start: ${raw.x[0]}, End: ${raw.x[1]}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
      <h2 style={{ color: "#fff", textAlign: "center" }}>Gantt Chart</h2>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label htmlFor="algorithm" style={{ color: "#fff", marginRight: "10px" }}>Choose an algorithm:</label>
        <select id="algorithm" value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="FIFO">FIFO</option>
          <option value="SJF">SJF</option>
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
          <h3 style={{ color: "#fff", textAlign: "center" }}>Processes</h3>
          <table style={{ width: "100%", color: "#fff", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #fff", padding: "8px" }}>Process ID</th>
                <th style={{ border: "1px solid #fff", padding: "8px" }}>Arrival Time</th>
                <th style={{ border: "1px solid #fff", padding: "8px" }}>Burst Time</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((process) => (
                <tr key={process.pid}>
                  <td style={{ border: "1px solid #fff", padding: "8px" }}>{process.pid}</td>
                  <td style={{ border: "1px solid #fff", padding: "8px" }}>{process.arrivalTime}</td>
                  <td style={{ border: "1px solid #fff", padding: "8px" }}>{process.burstTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ width: "45%" }}>
          <h3 style={{ color: "#fff", textAlign: "center" }}>{algorithm} Gantt Chart</h3>
          <Bar data={chartData(result)} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default GanttChart;