import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json));
  }, []);

  return (
    <div className="container"> {/* Adicionei a classe "container" */}
      <header>
        <div className="navbar-nav">
          <strong>React Nutri</strong>
        </div>
      </header>

      {nutri.map((item) => (
        <div key={item.id} className="produto-container-principal"> {/* Corrigi o nome da classe para "produto-container-principal" */}
          <article>
            <strong>{item.titulo}</strong>
            <div className="produto-principal">
              <img src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <button>Acessar</button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default App;
