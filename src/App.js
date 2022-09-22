import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar title= 'Assignment' /> */}

        <Switch>
          <Route path="/">
            <SignUp />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
