import React, { useRef, ReactNode } from "react";
import { useCardSpin } from "./useCardSpin";

/**
 * Propriedades do componente CardSpin.
 * 
 * @interface CardSpinProps
 * @property {string} className - A classe CSS a ser aplicada ao cartão.
 * @property {ReactNode} children - Os elementos filhos que serão renderizados dentro do cartão.
 * @property {string} height - A altura do cartão (pode usar unidades como '100px', '50%', etc.).
 * @property {string} width - A largura do cartão (pode usar unidades como '100px', '50%', etc.).
 * @property {number} [rotationSpeed=0] - A velocidade de rotação do cartão em graus por segundo.
 * @property {boolean} [draggable=false] - Define se o cartão pode ser arrastado.
 * @property {boolean} [hoverToStop=false] - Define se a rotação deve parar ao passar o mouse sobre o cartão.
 * @property {boolean} [clickToFlip=false] - Define se o cartão deve virar ao clicar.
 */
export interface CardSpinProps {
  className: string;
  children: ReactNode;
  height: string; 
  width: string;
  rotationSpeed?: number;
  draggable?: boolean;
  hoverToStop?: boolean;
  clickToFlip?: boolean;
}

/**
 * Componente que representa um cartão giratório que pode ser arrastado ou clicado para virar.
 *
 * @param {CardSpinProps} props - As propriedades do componente.
 * @returns {JSX.Element} O elemento JSX que representa o cartão giratório.
 */
const CardSpin: React.FC<CardSpinProps> = ({
  className,
  children,
  height,
  width,
  rotationSpeed = 0,
  draggable = false,
  hoverToStop = false,
  clickToFlip = false,
  ...props
}: CardSpinProps): JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(null);
  const {
    dragging,
    setIsHovered,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useCardSpin(cardRef, rotationSpeed, draggable, hoverToStop, clickToFlip);

  const style = {
    width,
    height,
    cursor: draggable ? (dragging ? "grabbing" : "grab") : "pointer",
    userSelect: "none" as const,
    willChange: "transform" as const,
    transition: dragging ? "none" : "transform ease",
  };

  return (
    <div
      ref={cardRef}
      className={className}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={style}
    >
      {children}
    </div>
  );
};

CardSpin.displayName = "CardSpin";

export default CardSpin;
