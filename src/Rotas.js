import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./screens/login/login";
import Pdv from "./screens/pdv/pdv";
import Gerenciar from "./screens/gerenciar/gerenciar";
import PaginaNaoEncontrada from "./screens/paginanaoencontrada/paginanaoencontrada";

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/pdv" component={Pdv} />
        <Route path="/gerenciar" component={Gerenciar} />
        <Route path="*" component={PaginaNaoEncontrada} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
