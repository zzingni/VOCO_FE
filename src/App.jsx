import { useState } from "react";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import DetailedReport from "./pages/DetailedReport/DetailedReport";

function App() {
  // Simple state-based routing for preview purposes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // You can test the pages by changing the URL manually,
  // e.g. travelling to localhost:5173/login
  if (currentPath === "/login" || currentPath === "/signup") {
    return <Auth />;
  }

  if (currentPath === "/dashboard") {
    return <Dashboard />;
  }

  if (currentPath === "/report") {
    return <DetailedReport />;
  }

  return <Home />;
}

export default App;