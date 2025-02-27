"use client";

import GanttChart from "./GnattChart";

export default function Home() {
  return (
    <div style={{ padding: "0px", backgroundColor: "#000000", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff" }}>Gantt Chart</h1>
      <p style={{ color: "#bbb" }}>Shows processes</p>
      <GanttChart />
    </div>
  );
}
