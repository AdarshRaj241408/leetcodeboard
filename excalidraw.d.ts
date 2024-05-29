declare module "@excalidraw/excalidraw" {
  import * as React from "react";

  export const Excalidraw: React.FC<any>;
  export function convertToExcalidrawElements(elements: any[]): any[];
}
