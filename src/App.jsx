import React from "react";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import PopBrowse from "./components/popups/popBrowse/popBrowse.jsx";
import PopNewCard from "./components/popups/popNewCard/popNewCard.jsx";
import PopUser from "./components/popups/popUser/popUser.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <PopBrowse />
      <PopNewCard />
      <PopUser />
    </div>
  );
};
// upd 18/03 -> for pull request
export default App;
