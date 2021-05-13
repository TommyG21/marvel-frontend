import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
