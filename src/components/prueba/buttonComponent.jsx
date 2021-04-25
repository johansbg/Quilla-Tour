import React from "react";
import { Button } from "reactstrap";

//Components

const ButtonComponent = () => {
  const [numero, setNumero] = React.useState(0);
  const [condicion, setCondicion] = React.useState(false);
  const [texto, setTexto] = React.useState("Desactivado");

  const sumar = () => {
    setNumero(numero + 1);
  };

  const evalCondicion = () => {
    if (condicion) {
      return (
        <div>
          <p>Activado</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Desactivado</p>
        </div>
      );
    }
  };

  const evalText = () => {
    !condicion ? setTexto("Activado") : setTexto("Desactivado");
    setCondicion(!condicion);
  };

  return (
    <div>
      <Button color="success" onClick={() => sumar()}>
        +1
      </Button>
      <p>{numero}</p>
      <Button color="warning" onClick={() => evalText()}>
        {texto}
      </Button>
      {evalCondicion()}
    </div>
  );
};

export default ButtonComponent;
