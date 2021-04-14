import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "components/Header";
import Case1 from "pages/Case1";
import Case2 from "pages/Case2";
import Case3 from "pages/Case3";
import Case4 from "pages/Case4";

const Card = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/card">
          <Redirect to="/card/case1" />
        </Route>
        <Route path="/card/case1" component={Case1} />
        <Route path="/card/case2" component={Case2} />
        <Route path="/card/case3" component={Case3} />
        <Route path="/card/case4" component={Case4} />
      </Switch>
    </div>
  );
};

export default Card;
