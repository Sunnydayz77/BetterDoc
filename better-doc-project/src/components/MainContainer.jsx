import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProviderContainer from "./ProviderContainer";
import ProviderSearch from "./ProviderSearch";
import ProviderMiniInfo from "./ProviderMiniInfo";
import ProviderDetails from "./ProviderDetails";
import SpecialtyContainer from "./SpecialtyContainer";
import SpecialtySearch from "./SpecialtySearch";
import SpecialtyMoreInfo from "./SpecialtyMoreInfo";
import NoMatch from "./NoMatch";

export default class MainContainer extends Component {
  render() {
    return (
      <main className="MainContent">
        <Switch>
          <Route exact path={"/"}>
            <h1>BetterDoc</h1>
            <h2>A Better Way To Search For Healthcare</h2>
            <h3>"Quote" ~Person</h3>
          </Route>
          <Route path={"/ProviderContainer"} component={ProviderContainer}/>
          <Route path={"/ProviderDetails"} component={ProviderDetails} />
          <Route path={"/SpecialtyContainer"} component={SpecialtyContainer} />
          {/* <Route path={"/SpecialtySearch"} component={SpecialtySearch} />
          <Route path={"/SpecialtyMoreInfo"} component={SpecialtyMoreInfo} /> */}
          <Route exact path={"*"} component={NoMatch} />
        </Switch>
      </main>
    );
  }
}
