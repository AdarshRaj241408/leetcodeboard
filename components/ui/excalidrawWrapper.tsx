"use client";
import {Excalidraw, MainMenu, serializeAsJSON, WelcomeScreen} from "@excalidraw/excalidraw";
import React from "react";
import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";
import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types";

//import "@excalidraw/excalidraw/index.css";
interface ExcalidrawWrapperProps {
  id: string;
}
const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({id}) => {
  const localStorageKey = `excalidraw_${id}`;
  const onChange = (
      elements: readonly ExcalidrawElement[],
      appState: AppState,
      files: BinaryFiles
  ) => {
    console.log("Function invoked")
    console.log(`excalidraw_${id}`)
    const content = serializeAsJSON(elements,appState,files, "local")
    localStorage.setItem(localStorageKey, content);
  }

  const retrieveInitialData = () => {
    const content = localStorage.getItem(localStorageKey)
    if (content) {
      return JSON.parse(content);
    }
  }
  return (
    <div style={{ height: "92.5vh", width: "100%" }}>
      <Excalidraw onChange={onChange} initialData={retrieveInitialData()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.HelpHint />
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Heading>
              Draw Here!
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.Logo></WelcomeScreen.Center.Logo>
              <WelcomeScreen.Center.MenuItemLoadScene />
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.ToolbarHint />
        </WelcomeScreen>
        <MainMenu >
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
          <MainMenu.DefaultItems.ToggleTheme />
        </MainMenu>
      </Excalidraw>
    </div>
  );
};
export default ExcalidrawWrapper;
