// "use client";
// import {Excalidraw, MainMenu, serializeAsJSON, WelcomeScreen} from "@excalidraw/excalidraw";
// import React from "react";
// import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";
// import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types";
//
// //import "@excalidraw/excalidraw/index.css";
// interface ExcalidrawWrapperProps {
//   problem_ID: string;
// }
// const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({problem_ID,}) => {
//   const localStorageKey = `excalidraw_${problem_ID}`;
//   const onChange = (
//       elements: readonly ExcalidrawElement[],
//       appState: AppState,
//       files: BinaryFiles
//   ) => {
//     console.log("Function invoked")
//     console.log(`excalidraw_${problem_ID}`)
//     const content = serializeAsJSON(elements,appState,files, "local")
//     localStorage.setItem(localStorageKey, content);
//   }
//
//   const retrieveInitialData = () => {
//     const content = localStorage.getItem(localStorageKey)
//     if (content) {
//       return JSON.parse(content);
//     }
//   }
//   return (
//     <div style={{ height: "92.5vh", width: "100%" }}>
//       <Excalidraw onChange={onChange} initialData={retrieveInitialData()}>
//         <WelcomeScreen>
//           <WelcomeScreen.Hints.HelpHint />
//           <WelcomeScreen.Hints.MenuHint />
//           <WelcomeScreen.Center>
//             <WelcomeScreen.Center.Heading>
//               Draw Here!
//             </WelcomeScreen.Center.Heading>
//             <WelcomeScreen.Center.Menu>
//               <WelcomeScreen.Center.Logo></WelcomeScreen.Center.Logo>
//               <WelcomeScreen.Center.MenuItemLoadScene />
//               <WelcomeScreen.Center.MenuItemHelp />
//             </WelcomeScreen.Center.Menu>
//           </WelcomeScreen.Center>
//           <WelcomeScreen.Hints.ToolbarHint />
//         </WelcomeScreen>
//         <MainMenu >
//           <MainMenu.DefaultItems.ClearCanvas />
//           <MainMenu.DefaultItems.Export />
//           <MainMenu.DefaultItems.LoadScene />
//           <MainMenu.DefaultItems.SaveAsImage />
//           <MainMenu.DefaultItems.Help />
//           <MainMenu.DefaultItems.ChangeCanvasBackground />
//           <MainMenu.DefaultItems.ToggleTheme />
//         </MainMenu>
//       </Excalidraw>
//     </div>
//   );
// };
// export default ExcalidrawWrapper;
"use client"
import {
  Excalidraw,
  MainMenu,
  serializeAsJSON,
  WelcomeScreen,
} from "@excalidraw/excalidraw"
import Image from "next/image"
import * as React from "react"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"

interface ExcalidrawWrapperProps {
  problem_ID: string
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({
  problem_ID,
}) => {
  const on_change = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    console.log("Function invoked")
    console.log(`excalidraw_${problem_ID}`)
    const content = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem(`excalidraw_${problem_ID}`, content)
  }

  const retriveInitialData = () => {
    const content = localStorage.getItem(`excalidraw_${problem_ID}`)
    if (content != null) {
      return JSON.parse(content)
    }
  }

  return (
    <div style={{ height: "90.5vh", width: "100%" }}>
      <Excalidraw onChange={on_change} initialData={retriveInitialData()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
            </WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              Notes, Made Simple!
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemLoadScene />
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>

        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper;