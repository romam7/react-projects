import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/hooks/ContadorHooks';
import ScrollHooks from './components/hooks/ScrollHooks';
import RelojHooks from './components/hooks/RelojHooks';
import AjaxHooks from './components/hooks/AjaxHooks';
import HooksPersonalizados from './components/hooks/HooksPersonalizados';
import Referencias from './components/hooks/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <hr className="hr-text" data-content="Componente" />
        <Componente msg="Hola soy un componente desde las props" />

        <hr className="hr-text" data-content="Propiedades" />
        <Propiedades
          cadena="Es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: 'Ro', correo: 'rba@gmail.com' }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento react</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como props" />
          }
        />

        <hr className="hr-text" data-content="Estado" />
        <Estado />

        <hr className="hr-text" data-content="Renderizado condicional" />
        <RenderizadoCondicional />

        <hr className="hr-text" data-content="Renderizado elementos" />
        <RenderizadoElementos />

        <hr className="hr-text" data-content="Eventos" />
        <EventosES6 />
        <EventosES7 />
        <MasEventos />

        <hr className="hr-text" data-content="Comunicacion entre componentes" />
        <Padre />

        <hr className="hr-text" data-content="Ciclo de vida" />
        <CicloVida />

        <hr className="hr-text" data-content="Peticiones asíncronas" />
        <AjaxApis />

        <hr className="hr-text" data-content="Contador hooks" />
        <ContadorHooks titulo="Contador de seguidores" />

        <hr className="hr-text" data-content="Use efftect" />
        <ScrollHooks />

        <hr className="hr-text" data-content="Reloj" />
        <RelojHooks />

        <hr className="hr-text" data-content="Ajax" />
        <AjaxHooks />

        <hr className="hr-text" data-content="Hooks Personalizados" />
        <HooksPersonalizados />

        <hr className="hr-text" data-content="Referencias" />
        <Referencias />

        <hr className="hr-text" data-content="Formularios" />
        <Formularios />

        <hr className="hr-text" data-content="Estilos" />
        <Estilos />

        <hr className="hr-text" data-content="Componentes estilizados" />
        <ComponentesEstilizados />
      </header>
    </div>
  );
}

export default App;
