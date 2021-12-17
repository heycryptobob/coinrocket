import "./App.css";
import { Header } from "./components/Header";
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Suspense } from "react";

function App() {

  return (
    <Suspense fallback="loading">
    <Router>
      <Header />
      <Switch>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
    </Suspense>
  );
}

export default App;