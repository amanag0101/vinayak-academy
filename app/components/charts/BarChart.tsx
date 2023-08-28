"use client";

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { useEffect } from "react";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title);

export const BarChart = () => {
  let canvas: HTMLCanvasElement | null = null;

  useEffect(() => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets: [
              {
                label: "Weekly Spent Hours",
                data: [8, 7, 6, 9, 5],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 206, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(153, 102, 255)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: "Weekly Spent Hours",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, []);

  return <canvas ref={(el) => (canvas = el)}></canvas>;
};
