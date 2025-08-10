import React from 'react';
import GlobalStyles from './GlobalStyles.styled.js';
import { AppWrapper } from './App.styled.js';
import './App.css';
import AppRoutes from './AppRoutes';
import AuthProvider from './context/authContext/AuthProvider.jsx';
import { TaskProvider } from './context/taskContext/TaskProvider.jsx';
import { CustomThemeProvider } from './context/themeContext/themeProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyles />
        <AppWrapper>
          <AuthProvider>
            <TaskProvider>
              <AppRoutes />
            </TaskProvider>
          </AuthProvider>
        </AppWrapper>
      </CustomThemeProvider>
      <ToastContainer
        position="top"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;
