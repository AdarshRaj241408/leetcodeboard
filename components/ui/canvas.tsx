// https://www.dhiwise.com/post/how-to-integrate-react-sketch-canvas-to-your-design-workflow

import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

export default function Canvas() {
    const canvasRef = useRef<CanvasDraw | null>(null);

  const saveData = () => {
    const data = canvasRef.current.getSaveData();
    localStorage.setItem("drawing", data);
  };

  const loadData = () => {
    const savedData = localStorage.getItem("drawing");
    if (savedData) {
      canvasRef.current.loadSaveData(savedData);
    }
  };

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { nativeEvent } = event;
    const { offsetX, offsetY } = nativeEvent;
    const draw = (moveEvent: MouseEvent) => {
      if (!canvasRef.current) {
        return;
      }
      // Drawing logic using canvasRef.current
    };
  };

  return (
    <div>
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight * 0.8}
        enablePanAndZoom={true}
        onMouseDown={startDrawing}
        lazyRadius={10}
        brushRadius={2}
      />
    </div>
  );
}
