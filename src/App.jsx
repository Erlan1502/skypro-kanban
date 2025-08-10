import React from "react";
import GlobalStyles from "./GlobalStyles.styled.js";
import { AppWrapper } from "./App.styled.js";
import "./App.css";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/authContext/AuthProvider.jsx";
import { TaskProvider } from "./context/taskContext/TaskProvider.jsx";
import { CustomThemeProvider } from "./context/themeContext/themeProvider.jsx";
const App = () => {
  return (
    <>
      <GlobalStyles />
        <CustomThemeProvider>
        <AppWrapper>
          <AuthProvider>
            <TaskProvider>
              <AppRoutes />
            </TaskProvider>
          </AuthProvider>
        </AppWrapper>
      </CustomThemeProvider>
    </>
  );
};

export default App;
