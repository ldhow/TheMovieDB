import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Colors } from "~/constants/colors";
import { styles } from "./index.style";

interface IGaugeProps {
  size?: number;
  strokeWidth?: number;
  value: number; // between 0 - 100
  backgroundColor?: string;
  progressColor?: string;
  labelColor?: string;
}

const GaugeCircle: React.FC<IGaugeProps> = ({
  size = 80,
  strokeWidth = 6,
  value,
  backgroundColor = Colors.darkNavy,
  progressColor = Colors.success,
  labelColor = Colors.white,
}) => {
  const radius = (size - strokeWidth) / 2;
  // Total length of the circle’s stroke
  const circumference = 2 * Math.PI * radius;
  // Offset to show progress based on value (0–100)
  const strokeDashoffset = circumference * (1 - value / 100);
  // Total wrapper size to avoid clipping
  const wrapperSize = size + strokeWidth * 2;
  // Circle center point
  const cx = size / 2;
  const cy = size / 2;

  return (
    <View
      style={[
        styles.container,
        {
          width: wrapperSize,
          height: wrapperSize,
          borderRadius: wrapperSize / 2,
        },
      ]}
    >
      <Svg width={size} height={size}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={cx}
          cy={cy}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={progressColor}
          fill="none"
          cx={cx}
          cy={cy}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90, ${cx}, ${cy})`}
        />
      </Svg>
      <View style={styles.labelWrapper}>
        <Text style={[styles.labelText, { color: labelColor }]}>
          {Math.round(value)}
          <Text style={styles.percent}>%</Text>
        </Text>
      </View>
    </View>
  );
};

export default GaugeCircle;
