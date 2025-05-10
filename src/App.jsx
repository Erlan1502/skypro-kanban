import React from "react";
import GlobalStyles from "./GlobalStyles.styled.js";
import { AppWrapper } from "./App.styled.js";
import "./App.css";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/authContext/AuthProvider.jsx";
import { TaskProvider } from "./context/taskContext/TaskProvider.jsx";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <AuthProvider>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
        </AuthProvider>
      </AppWrapper>
    </>
  );
};

export default App;
