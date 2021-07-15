import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/service" exact>
              <Service />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
