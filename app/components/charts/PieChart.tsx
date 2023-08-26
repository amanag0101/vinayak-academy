"use client";

import { Chart, PieController, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(PieController, ArcElement, Tooltip, Legend, Title);

export const PieChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Math", "Science", "English"],
            datasets: [
              {
                label: "Subject Improvement",
                data: [20, 30, 50],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: "Total Improvement",
              },
              legend: {
                position: "top",
                labels: {
                  font: {
                    size: 14,
                  },
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};