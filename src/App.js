import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserPage from "./components/UserPage";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route
            exact
            path="/login"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route
            exact
            path="/userpage"
            element={<UserPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
