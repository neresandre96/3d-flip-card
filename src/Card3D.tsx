import React, { ReactNode } from "react";
import CardSpin from "./CardSpin";
import ErrorBoundary from "./ErrorBoundary";

/**
 * Propriedades do componente Card3D.
 * 
 * @interface Card3DProps
 * @property {ReactNode[]} children - Os elementos filhos do cartão, deve conter exatamente dois elementos.
 * @property {string} height - A altura do cartão (pode usar unidades como '100px', '50%', etc.).
 * @property {string} width - A largura do cartão (pode usar unidades como '100px', '50%', etc.).
 * @property {number} thickness - A espessura do cartão em pixels.
 * @property {number} [rotationSpeed=0] - A velocidade de rotação do cartão em graus por segundo. Padrão é 0.
 * @property {boolean} [hoverToStop=false] - Define se a rotação deve parar ao passar o mouse sobre o cartão. Padrão é false.
 * @property {"dragToFlip" | "clickToFlip"} mode - O modo de interação para virar o cartão.
 * @property {string} leftColor - A cor do lado esquerdo do cartão.
 * @property {string} rightColor - A cor do lado direito do cartão.
 */
export interface Card3DProps {
  children: [ReactNode, ReactNode]; 
  height: string;
  width: string;
  thickness: number; 
  rotationSpeed?: number;
  hoverToStop?: boolean;
  mode: "dragToFlip" | "clickToFlip"; 
  leftColor: string; 
  rightColor: string; 
}

/**
 * Componente que representa um cartão 3D interativo que pode ser girado.
 *
 * @param {Card3DProps} props - As propriedades do componente.
 * @returns {JSX.Element | null} O elemento JSX que representa o cartão ou null se a quantidade de filhos for diferente de 2.
 *
 * @see Card3DProps - As propriedades do componente Card3D, que define a configuração e o comportamento do cartão.
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
}: Card3DProps): JSX.Element | null => { 

  if (children.length !== 2) {
    console.warn("Card component expects exactly two children.");
    return null; 
  }

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
    backgroundColor: leftColor,
  };

  const rightSideStyle = {
    width: `${thickness}px`,
    right: `-${halfThickness}px`,
    backgroundColor: rightColor,
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
            {children[0]}
          </div>

          <div className="card-face card-back" style={backStyle}>
            {children[1]}
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
