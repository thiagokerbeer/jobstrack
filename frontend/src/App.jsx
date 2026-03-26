import "./index.css";
import { useState } from "react";
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  if (currentPage === "dashboard") {
    return <Dashboard onBack={() => setCurrentPage("home")} />;
  }

  return <Home onOpenDashboard={() => setCurrentPage("dashboard")} />;
}

export default App;