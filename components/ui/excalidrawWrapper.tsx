"use client";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";

//import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{ height: "92.5vh", width: "100%" }}>
      <Excalidraw>
        <WelcomeScreen>
          <WelcomeScreen.Hints.HelpHint />
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>
      </Excalidraw>
    </div>
  );
};
export default ExcalidrawWrapper;
