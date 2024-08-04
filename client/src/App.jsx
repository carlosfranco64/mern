import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
// import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { TaskRoute } from "./pages/TaskRoute";
// import { TaskProvider } from "./context/TaskContext";
import { Header } from "./components/Header";
import { useTask } from "./context/TaskContext";

function App() {


  const { mode} = useTask();


  return (
    <div className={`${mode ? "bg-[#202020] tex":"bg-white"}`}>
    
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
   
              </div>
  );
}

export default App;
