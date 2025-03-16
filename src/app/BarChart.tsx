import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Result } from '../types/process';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    results: { [key: string]: Result };
    waitTimeChartRef: React.RefObject<HTMLCanvasElement | null>;
    turnaroundTimeChartRef: React.RefObject<HTMLCanvasElement | null>;
  }

const BarChart: React.FC<BarChartProps> = ({ results, waitTimeChartRef, turnaroundTimeChartRef }) => {
  const waitTimeChartInstanceRef = useRef<ChartJS<'bar'> | null>(null);
  const turnaroundTimeChartInstanceRef = useRef<ChartJS<'bar'> | null>(null);

  useEffect(() => {
    if (waitTimeChartInstanceRef.current) {
      waitTimeChartRef.current = waitTimeChartInstanceRef.current.canvas;
    }
    if (turnaroundTimeChartInstanceRef.current) {
      turnaroundTimeChartRef.current = turnaroundTimeChartInstanceRef.current.canvas;
    }
  }, [waitTimeChartRef, turnaroundTimeChartRef]);

  const algorithms = Object.keys(results);
  const averageWaitTimes = algorithms.map(algorithm => results[algorithm].AverageWaitTime);
  const averageTurnaroundTimes = algorithms.map(algorithm => results[algorithm].AverageTurnAroundTime);

  const colors = [
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
  ];

  const waitTimeData = {
    labels: algorithms,
    datasets: [
      {
        label: 'Average Wait Time',
        data: averageWaitTimes,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.6', '1')),
        borderWidth: 1,
      },
    ],
  };

  const turnaroundTimeData = {
    labels: algorithms,
    datasets: [
      {
        label: 'Average Turnaround Time',
        data: averageTurnaroundTimes,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.6', '1')),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto', paddingTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '45%' }}>
        <Bar ref={waitTimeChartInstanceRef} data={waitTimeData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Average Wait Time by Algorithm' } } }} />
      </div>
      <div style={{ width: '45%' }}>
        <Bar ref={turnaroundTimeChartInstanceRef} data={turnaroundTimeData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Average Turnaround Time by Algorithm' } } }} />
      </div>
    </div>
  );
};

export default BarChart;