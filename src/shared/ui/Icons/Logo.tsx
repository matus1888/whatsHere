import React from "react";

interface LogoProps {
  initials?: [string, string];
  size?: number;
  circleColor?: string;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  initials = ["w", "h"],
  size = 40,
  circleColor = "rgba(255 0 0)",
  textColor = "white",
}) => {
  const firstInitial = initials[0]?.[0]?.toLowerCase() || "";
  const secondInitial = initials[1]?.[0]?.toLowerCase() || "";
  const combinedInitials = `${firstInitial}${secondInitial}`;

  const circleRadius = size / 2;
  const centerX = size / 2;
  const centerY = size / 2;

  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={centerX} cy={centerY} r={circleRadius} fill={circleColor} />

        <text
          x={centerX}
          y={centerY}
          fontFamily="hh sans"
          fontSize={size * 0.45}
          fontWeight="bold"
          fill={textColor}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing={size * 0.01}
        >
          {combinedInitials}
        </text>
      </svg>
    </div>
  );
};
