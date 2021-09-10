import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";
import Error from "./Pages/Error";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id">
        <SingleMovie />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
