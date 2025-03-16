"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { Result } from "../types/process";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GanttChart = ({ algorithm, result }: { algorithm: string, result: Result }) => {
  const [currentTimeline, setCurrentTimeline] = useState<{ time: number, process: number }[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    if (result) {
      setCurrentTimeline(result.timeline);
      setCurrentStep(0);
    }
  }, [result]);

  useEffect(() => {
    if (currentTimeline.length > 0 && currentStep < currentTimeline.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      }, 1000); // Update every second

      return () => clearTimeout(timer);
    }
  }, [currentStep, currentTimeline]);

  const generateGanttChartData = (timeline: { time: number, process: number }[]) => {
    const labels: string[] = [];
    const data: { x: [number, number]; y: string }[] = [];

    let lastTime = 0;

    timeline.forEach((entry) => {
      const processId = entry.process;
      const currentTime = entry.time;

      const label = processId === 0 ? "Idle" : `P${processId}`;

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

  const chartData = (timeline: { time: number, process: number }[]) => {
    if (timeline.length === 0) return { labels: [], datasets: [] }; // Ensure timeline is available

    const { labels, data } = generateGanttChartData(timeline);

    return {
      labels,
      datasets: [
        {
          label: "Process Execution Time",
          data,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          backgroundColor: (context: any) => {
            const label = context.raw.y;
            return label === "Idle" ? "rgba(200, 200, 200, 0.8)" : "rgba(52, 152, 219, 0.8)"; // Gray for Idle, Blue for processes
          },
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
      <h2 style={{ color: "#fff", textAlign: "center" }}>{algorithm} Gantt Chart</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Bar data={chartData(currentTimeline.slice(0, currentStep))} options={chartOptions} />
      </motion.div>
    </div>
  );
};

export default GanttChart;