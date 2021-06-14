// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { LaunchPage } from './pages/LaunchPage'
import { AddCoin } from './pages/AddCoin'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // console.log('REACT_APP_GRAPHCMS_ENDPOINT', process.env.REACT_APP_GRAPHCMS_ENDPOINT)
  // console.log('REACT_APP_GRAPHCMS_AUTH_TOKEN', process.env.REACT_APP_GRAPHCMS_AUTH_TOKEN)
  // console.log('REACT_APP_RECAPTCHA_SITE_KEY', process.env.REACT_APP_RECAPTCHA_SITE_KEY)

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/apply"><AddCoin /></Route>
        <Route path="/"><LaunchPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;