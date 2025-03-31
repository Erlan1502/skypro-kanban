import React from "react";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import PopBrowse from "./components/popups/popBrowse/popBrowse.jsx";
import PopNewCard from "./components/popups/popNewCard/popNewCard.jsx";
import PopUser from "./components/popups/popUser/popUser.jsx";
import GlobalStyles from "./GlobalStyles.styled.js"; // Импорт без { }
import { AppWrapper } from "./App.styled.js";
import "./App.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Main />
        <PopBrowse />
        <PopNewCard />
        <PopUser />
      </AppWrapper>
    </>
  );
};

export default App;
