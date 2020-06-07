import React from "react";
import { Redirect } from "react-router";

function Logado(props) {
  console.log(props.matricula);
  if (props.matricula === "11111" && props.senha === "11111") {
    return <Redirect to="/pdv" />;
  } else if (props.matricula === "22222" && props.senha === "22222") {
    return <Redirect to="/gerenciar" />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default Logado;
