import { useState, useEffect, useRef, useCallback, RefObject } from "react";

export interface UseCardSpinReturn {
  dragging: boolean;
  setIsHovered: (isHovered: boolean) => void;
  handlePointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerMove: (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => void; 
  handlePointerUp: (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => void;   
}

/**
 * Hook que gerencia a lógica de rotação e interações de um cartão giratório.
 *
 * @param {RefObject<HTMLDivElement>} ref - Referência ao elemento do cartão.
 * @param {number} rotationSpeed - A velocidade de rotação do cartão em graus por segundo (default é 0).
 * @param {boolean} draggable - Define se o cartão pode ser arrastado (default é false).
 * @param {boolean} hoverToStop - Define se a rotação deve parar ao passar o mouse sobre o cartão (default é false).
 * @param {boolean} clickToFlip - Define se o cartão deve virar ao clicar (default é false).
 * @returns {UseCardSpinReturn} - Um objeto com informações sobre o estado do cartão e manipuladores de eventos.
 */
export const useCardSpin = (
  ref: RefObject<HTMLDivElement>,
  rotationSpeed = 0,
  draggable = false,
  hoverToStop = false,
  clickToFlip = false
): UseCardSpinReturn => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const dragStartData = useRef({
    dragStartRotation: 0,
    dragStartClientX: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const animateRotation = () => {
      if ((!isHovered || !hoverToStop) && !dragging && rotationSpeed > 0) {
        setRotation((prevRotation) => prevRotation + rotationSpeed);
        animationFrameId = requestAnimationFrame(animateRotation);
      }
    };

    animateRotation();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, dragging, rotationSpeed, hoverToStop]);

  useEffect(() => {
    if (ref.current) {
      const flipRotation = isFlipped ? 180 : 0;
      ref.current.style.transform = `rotateY(${rotation + flipRotation}deg)`;
    }
  }, [rotation, isFlipped, ref]);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!draggable) return;

      event.preventDefault();
      const { clientX } = event;

      dragStartData.current = {
        dragStartRotation: rotation,
        dragStartClientX: clientX,
      };

      setDragging(true);
      ref.current?.setPointerCapture(event.pointerId);
    },
    [rotation, ref, draggable]
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => {
      if (dragging && ref.current?.hasPointerCapture((event as PointerEvent).pointerId)) {
        const { clientX } = event instanceof PointerEvent ? event : event.nativeEvent;
        const deltaX = clientX - dragStartData.current.dragStartClientX;
        const newRotation = dragStartData.current.dragStartRotation + deltaX * 0.5;
        setRotation(newRotation);
      }
    },
    [dragging, ref]
  );

  const handlePointerUp = useCallback(
    (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => {
      if (dragging) {
        ref.current?.releasePointerCapture((event as PointerEvent).pointerId);
        setDragging(false);
      }
    },
    [dragging, ref]
  );

  const handleClick = useCallback(() => {
    if (!dragging) {
      setIsFlipped((prev) => !prev);
    }
  }, [dragging]);

  useEffect(() => {
    const cardElement = ref.current;

    if (!cardElement) return () => {};

    if (clickToFlip) {
      cardElement.addEventListener("click", handleClick);
    }

    if (draggable) {
      cardElement.addEventListener("pointermove", handlePointerMove);
      cardElement.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      if (clickToFlip) {
        cardElement.removeEventListener("click", handleClick);
      }
      if (draggable) {
        cardElement.removeEventListener("pointermove", handlePointerMove);
        cardElement.removeEventListener("pointerup", handlePointerUp);
      }
    };
  }, [draggable, handlePointerMove, handlePointerUp, handleClick, clickToFlip, ref]);

  return {
    dragging,
    setIsHovered,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
};
