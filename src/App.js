import React from "react";
import { Input, Header } from "./components";
import Login from "./pages/login";
import UserForm from "./pages/userForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={UserForm} />
          <Route path="/profile" component={UserForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
