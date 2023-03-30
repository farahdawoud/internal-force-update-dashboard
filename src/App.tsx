import "./App.css";
import Header from "./components/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPageController } from "./pages/LoginPage/LoginPage.controller";
import { CookiesProvider } from "react-cookie";
import { ApiKey } from "./components/ApiKey/ApiKey";
import VersionsManagementPage from "./pages/VersionsManagementPage";
import { ProtectedRoute } from "./pages/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                path="/"
                element={
                  <>
                    <Header />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="versions"
                element={
                  <ProtectedRoute>
                    <Header />
                    <VersionsManagementPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="api-key"
                element={
                  <ProtectedRoute>
                    <Header />
                    <ApiKey />
                  </ProtectedRoute>
                }
              />
              <Route
                path="auth"
                element={
                  <>
                    <Header />
                    <LoginPageController />
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CookiesProvider>
  );
}

export default App;
