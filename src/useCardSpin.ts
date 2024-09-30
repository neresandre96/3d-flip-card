import { useState, useEffect, useRef, useCallback, RefObject } from "react";

export interface UseCardSpinReturn {
  dragging: boolean;
  setIsHovered: (isHovered: boolean) => void;
  handlePointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerMove: (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => void; 
  handlePointerUp: (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => void;   
}

/**
 * Hook that manages the rotation logic and interactions of a spinning card.
 *
 * @param {RefObject<HTMLDivElement>} ref - Reference to the card element.
 * @param {number} rotationSpeed - The rotation speed of the card in degrees per second (default is 0).
 * @param {boolean} draggable - Determines if the card can be dragged (default is false).
 * @param {boolean} hoverToStop - Determines if the rotation should stop when hovering over the card (default is false).
 * @param {boolean} clickToFlip - Determines if the card should flip on click (default is false).
 * @returns {UseCardSpinReturn} - An object containing information about the card's state and event handlers.
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
