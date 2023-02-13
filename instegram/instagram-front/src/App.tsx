import { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import NavBar from "./components/NavBar/NavBar";
import UpperNavBar from "./components/Profile/NavBar/NavBarP";
import { getUser } from "./requests/usersRequests";
import { useAuth } from "./contexts/UserContext";

function App() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    getUser("Soof").then(setUser);
  }, []);

  return (
    <div>
      <UpperNavBar userName={user?.userName} />
      <NavBar />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
