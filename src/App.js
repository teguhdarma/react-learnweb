import React, { Component } from "react";
import Jumbotroncomponent from "./components/Jumbotroncomponent";
import Navbarcomponent from "./components/Navbarcomponent";
import Detailusercontainer from "./Container/Detailusercontainer";
import Createusercontainer from "./Container/Createusercontainer";
import Homecontainer from "./Container/Homecontainer";
import Editcontainer from "./Container/Editcontainer";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbarcomponent />
        <Jumbotroncomponent />
        <BrowserRouter>
          <Route path="/" exact component={Homecontainer} />
          <Route path="/create" exact component={Createusercontainer} />
          <Route path="/detail/:id" exact component={Detailusercontainer} />
          <Route path="/edit/:id" exact component={Editcontainer} />
        </BrowserRouter>
      </div>
    );
  }
}
