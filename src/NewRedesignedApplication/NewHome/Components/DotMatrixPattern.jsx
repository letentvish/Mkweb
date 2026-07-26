import React from "react";

export default function DotMatrixPattern({
  rows = 3,
  cols = 4,
  dotSize = 2.5,
  spacing = 25,
  color = "currentColor",
  className = "",
}) {
  const width = cols * spacing;
  const height = rows * spacing;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={10 + c * spacing}
          cy={10 + r * spacing}
          r={dotSize}
          fill={color}
        />
      );
    }
  }

  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {dots}
      </svg>
    </div>
  );
}
