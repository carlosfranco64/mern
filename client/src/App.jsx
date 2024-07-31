import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { TaskRoute } from "./pages/TaskRoute";
import { TaskProvider } from "./context/TaskContext";
import { Header } from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route
              path="/login"
              element={
                <h1>
                  <LoginPage />
                </h1>
              }
            />
            <Route
              path="/register"
              element={
                <h1>
                  <RegisterPage />
                </h1>
              }
            />

            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <TaskRoute />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
