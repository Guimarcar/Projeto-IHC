import React from "react";
import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import login_img from "../../_assets/login_image.jpg";

function Login() {
  return (
    <>
      <div className="block"></div>

      <img className="back_img" src={login_img} alt="Imagem de Login" />

      <Form className="formulario">
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entre com seu número de MATRÍCULA"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Entre com sua SENHA" />
        </Form.Group>
        <Link to="/pdv">
          <Button variant="primary" type="submit" to="/pdv">
            Entrar
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default Login;
