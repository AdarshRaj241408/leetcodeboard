"use client";
import {Excalidraw, MainMenu, serializeAsJSON, WelcomeScreen} from "@excalidraw/excalidraw";
import React from "react";
import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";
import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types";
import { firestore } from "@/components/firebase";
import { doc, getDoc, setDoc, DocumentReference} from "firebase/firestore";
import {useEffect, useState} from "react";

//import "@excalidraw/excalidraw/index.css";
interface ExcalidrawWrapperProps {
  id: string;
}
interface ExcalidrawData {
  content: string;
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({id}) => {
  const localStorageKey = `excalidraw_${id}`;
  const documentId = `excalidraw_${id}`;
  const onChange = async (
      elements: readonly ExcalidrawElement[],
      appState: AppState,
      files: BinaryFiles
  ) => {
    // console.log("Function invoked")
    // console.log(`excalidraw_${id}`)
    const content = serializeAsJSON(elements,appState,files, "database")
    localStorage.setItem(localStorageKey, content);
  }

  // const retrieveInitialData = async () => {
  //   try {
  //     const docRef = doc(firestore, "excalidraw", id);
  //     const docSnap = await getDoc(docRef);
  //
  //     if (docSnap.exists()) {
  //       const data = docSnap.data() as ExcalidrawData;
  //       return JSON.parse(data.content);
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     if (error.code === "unavailable") {
  //       console.log("Firestore is currently unavailable. Check your network connection.");
  //     } else {
  //       console.error("Error retrieving data from Firestore:", error);
  //     }
  //   }
  //   return null;
  // };
  const getDocumentData = async (collection: string, id: string) => {
    try {
      const docRef = doc(firestore, collection, documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as ExcalidrawData;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving document:", error);
      return null;
    }
  };

  const retrieveInitialData = async () => {
    try {
      const data = await getDocumentData("excalidraw", id)
      if (data && data.content) {
        return JSON.parse(data.content)
      }
    } catch (error) {
      console.error("Error retrieving data from Firestore:", error)
    }
    return null
  }
  const [initialData, setInitialData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await retrieveInitialData();
      setInitialData(data);
    };

    fetchData().catch(error => console.error("Error fetching data:", error));
  }, [id]);


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
