import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CardPage from "./pages/CardPage/CardPage";
import NewCardPage from "./pages/NewCardPage/NewCardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { PrivateRoute } from "./components/privateRoute";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage isSignUp={false} setIsAuth={setIsAuth} />}
      />
      <Route
        path="/register"
        element={<LoginPage isSignUp={true} setIsAuth={setIsAuth} />}
      />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/card/:id" element={<CardPage />} />
          <Route path="/new-card" element={<NewCardPage />} />
          <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
