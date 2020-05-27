import React from "react";
import "./paginanaoencontrada.css";
import img_nfound from "../../_assets/404.png";

function PaginaNaoEncontrada() {
  return (
    <>
      <img className="not_found_img" src={img_nfound} alt="IMAGEM 404" />
    </>
  );
}

export default PaginaNaoEncontrada;
