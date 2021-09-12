import './App.css';
import Nav from "./components/Nav";
import Back from "./components/Home/Back";
import Footer from "./components/Footer";
import LoginForm from './components/Login/LoginForm';
import { BrowserRouter,Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Back />
        </Route>

        <Route path="/LOGIN">
          <LoginForm />
        </Route>

      </Switch>
      <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
