import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { PrivateRoute } from "./components/privateRoute";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext.js";

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage isSignUp={false} />} />
      <Route path="/register" element={<LoginPage isSignUp={true} />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/exit" element={<ExitPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
