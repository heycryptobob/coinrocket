import "./App.scss";
import { Header } from "./Header";
import { HomePage } from './pages/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"><HomePage /></Route>
      </Switch>
    </Router>
  );
}

export default App;