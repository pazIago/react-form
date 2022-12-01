import React, { useState } from "react";
import Button from "./Component/Button";
import Radio from "./Component/Radio";
const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <main className="container flex flex-col gap-2 p-4">
      <form onSubmit={(event) => event.preventDefault}>
        {perguntas.map((pergunta, index) => {
          return (
            <Radio
              active={slide === index}
              key={pergunta.id}
              value={respostas[pergunta.id]}
              onChange={handleChange}
              {...pergunta}
            />
          );
        })}
        {resultado ? (
          <p>{resultado}</p>
        ) : (
          <Button onClick={handleClick} className="mt-4" />
        )}
      </form>
    </main>
  );
};

export default App;
