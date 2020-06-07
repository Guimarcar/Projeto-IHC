import "./produtos.css";
import React from "react";

class Produto extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    fetch("http://localhost:4321/produto")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          produtos: res,
        });
      });
  }

  render() {
    let content = <p>Carregando...</p>;

    if (this.state.produtos.length !== 0) {
      content = (
        <ul className="lista">
          {this.state.produtos.map((item) => (
            <li key={item.id} className="produtocard">
              <p>
                <b>Descricao:</b> {item.descricao}
              </p>
              <p>
                <b>Valor: R$</b> <span className="valor">{item.valor}</span>
              </p>
              <p>
                <img src={item.img} className="produtoimg" />
              </p>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h1 className="titulo">Gerenciar Produtos</h1>

        {content}
      </div>
    );
  }
}

export default Produto;
