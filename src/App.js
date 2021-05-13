import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters";

function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/">
          <Characters />
        </Route>
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
