import { Route, Switch, Redirect } from "react-router-dom";
import Card from "pages/Card";
import Text from "pages/Text";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/card" />
        </Route>
        <Route path="/card" component={Card} />
        <Route path="/text" component={Text} />
      </Switch>
    </div>
  );
}

export default App;
