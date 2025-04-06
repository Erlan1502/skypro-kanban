import React from "react";
import Header from "./components/header/header.jsx";
import PopBrowse from "./components/popups/popBrowse/popBrowse.jsx";
import PopNewCard from "./components/popups/popNewCard/popNewCard.jsx";
import PopUser from "./components/popups/popUser/popUser.jsx";
import GlobalStyles from "./GlobalStyles.styled.js";
import { AppWrapper } from "./App.styled.js";
import "./App.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <PopBrowse />
        <PopNewCard />
        <PopUser />
        <AppRoutes />
      </AppWrapper>
    </>
  );
};

export default App;
