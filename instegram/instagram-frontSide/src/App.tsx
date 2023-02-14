import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { getUser } from "./requests/usersRequests";
import { useAuth } from "./contexts/authContext";
import UpperNavBar from "./components/navBars/upperNavBar/upperNavBar";
import BottomNavBar from "./components/navBars/bottomNavBar/bottomNavBar";

function App() {
  const { setLogInUser } = useAuth();

  useEffect(() => {
   getUser("Soof").then(setLogInUser);
  });

  return (
    <div>
      <UpperNavBar />
      <BottomNavBar />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
