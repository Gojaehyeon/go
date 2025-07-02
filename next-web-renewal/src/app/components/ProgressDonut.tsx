import React from "react";

interface ProgressDonutProps {
  progress: number; // 0~1
  size?: number;
  strokeWidth?: number;
  bgColor?: string;
  fgColor?: string;
}

export default function ProgressDonut({
  progress,
  size = 24,
  strokeWidth = 4,
  bgColor = "#333",
  fgColor = "#bbb",
}: ProgressDonutProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={bgColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={fgColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.3s" }}
      />
    </svg>
  );
} 