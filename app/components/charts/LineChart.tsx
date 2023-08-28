"use client";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
} from "chart.js";
import { useEffect } from "react";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

export const LineChart = () => {
  let canvas: HTMLCanvasElement | null = null;

  useEffect(() => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: "Monthly Grade",
              },
            },
          },
        });
      }
    }
  }, []);

  return <canvas ref={(el) => (canvas = el)}></canvas>;
};
