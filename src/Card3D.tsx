import React, { ReactNode } from "react";
import CardSpin from "./CardSpin";
import ErrorBoundary from "./ErrorBoundary";

/**
 * Properties of the Card3D component.
 * 
 * @interface Card3DProps
 * @property {ReactNode, ReactNode} children - Child elements of the card, must contain exactly two elements: back and front.
 * @property {string} height - The height of the card (can use units like '100px', '50%', etc.).
 * @property {string} width - The width of the card (can use units like '100px', '50%', etc.).
 * @property {number} thickness - The thickness of the card in pixels.
 * @property {number} [rotationSpeed=0] - The rotation speed of the card in degrees per second. Default is 0.
 * @property {boolean} [hoverToStop=false] - Determines if the rotation should stop when hovering over the card. Default is false.
 * @property {"dragToFlip" | "clickToFlip"} mode - The interaction mode for flipping the card.
 * @property {string} leftColor - The color of the left side of the card.
 * @property {string} rightColor - The color of the right side of the card.
 * @property {string} borderColor - The color of the card edges. Default is 'white'.
 */
export interface Card3DProps {
  children: [ReactNode, ReactNode]; 
  height: string;
  width: string;
  thickness: number; 
  rotationSpeed?: number;
  hoverToStop?: boolean;
  mode: "dragToFlip" | "clickToFlip"; 
  leftColor?: string; 
  rightColor?: string;
  borderColor?: string;
}

/**
 * Component that represents an interactive 3D card that can be flipped.
 *
 * @param {Card3DProps} props - The properties of the component.
 * @returns {JSX.Element | null} The JSX element that represents the card or null if the number of children is not equal to 2.
 *
 * @see Card3DProps - The properties of the Card3D component, which define the configuration and behavior of the card.
 */
const Card3D: React.FC<Card3DProps> = ({
  children,
  height,
  width,
  thickness,
  rotationSpeed = 0,
  hoverToStop = false,
  mode,
  leftColor,
  rightColor,
  borderColor = "white"
}: Card3DProps): JSX.Element | null => { 

  if (children.length !== 2) {
    console.warn("Card component expects exactly two children.");
    return null; 
  }

  const [front, back] = children;

  const borderStyle = {
    colorLeft: leftColor || borderColor,
    colorRight: rightColor || borderColor,
  };

  const halfThickness = thickness / 2;
  const effectiveRotationSpeed = mode === "clickToFlip" ? 0 : rotationSpeed;

  const frontStyle = {
    transform: `rotateY(0deg) translateZ(${halfThickness}px)`,
    background: "red",
  };

  const backStyle = {
    transform: `rotateY(180deg) translateZ(${halfThickness}px)`,
    background: "blue",
  };

  const leftSideStyle = {
    width: `${thickness}px`,
    left: `-${halfThickness}px`,
    backgroundColor: borderStyle.colorLeft,
  };

  const rightSideStyle = {
    width: `${thickness}px`,
    right: `-${halfThickness}px`,
    backgroundColor: borderStyle.colorRight,
  };

  return (
    <div className="card-container" role="button" tabIndex={0}>
      <ErrorBoundary>
        <CardSpin
          className='card'
          height={height}
          width={width}
          rotationSpeed={effectiveRotationSpeed}
          draggable={mode === "dragToFlip"}
          hoverToStop={hoverToStop}
          clickToFlip={mode === "clickToFlip"}
        >
          <div className="card-face card-front" style={frontStyle}>
            {front}
          </div>

          <div className="card-face card-back" style={backStyle}>
            {back}
          </div>

          <div className="card-side card-side-left" style={leftSideStyle}></div>
          <div className="card-side card-side-right" style={rightSideStyle}></div>
        </CardSpin>
      </ErrorBoundary>
    </div>
  );
};

Card3D.displayName = "Card3D";

export default Card3D;
