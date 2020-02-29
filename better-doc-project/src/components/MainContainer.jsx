import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProviderContainer from "./ProviderContainer";
import ProviderDetails from "./ProviderDetails";
import SpecialtyContainer from "./SpecialtyContainer";
import NoMatch from "./NoMatch";

export default class MainContainer extends Component {
  render() {
    return (
      <main className="mainContent">
        <Switch>
          <Route exact path={"/"}>
          <div className="home">
          </div>
          </Route>

          <Route path={"/ProviderContainer"} component={ProviderContainer}/>
        
          <Route path={"/SpecialtyContainer"} component={SpecialtyContainer} />
        
          <Route exact path={"*"} component={NoMatch} />
        </Switch>
      </main>
    );
  }
}
