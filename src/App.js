import { Route, Switch, Redirect } from "react-router-dom";
import Case1 from "pages/Case1";
import Case2 from "pages/Case2";
import Case3 from "pages/Case3";
import Case4 from "pages/Case4";
import Default from "pages/Default";
import Disable from "pages/Disable";
import Readonly from "pages/Readonly";
import CardHeader from "components/CardHeader";
import InputHeader from "components/InputHeader";

function App() {
  return (
    <div className="App">
      <CardHeader />
      <InputHeader />
      <Switch>
        <Route exact path="/">
          <Redirect to="/card/case1" />
        </Route>
        <Route path="/card/case1" component={Case1} />
        <Route path="/card/case2" component={Case2} />
        <Route path="/card/case3" component={Case3} />
        <Route path="/card/case4" component={Case4} />
        <Route path="/text/default" component={Default} />
        <Route path="/text/disable" component={Disable} />
        <Route path="/text/readonly" component={Readonly} />
      </Switch>
    </div>
  );
}

export default App;
