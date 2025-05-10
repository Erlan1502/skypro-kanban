import React from "react";
import GlobalStyles from "./GlobalStyles.styled.js";
import { AppWrapper } from "./App.styled.js";
import "./App.css";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/authContext/AuthProvider.jsx";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </AppWrapper>
    </>
  );
};

export default App;
