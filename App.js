import './App.css';

import Topo from './components/Topo/index';

import Header from './components/Header/index';

import Main from './components/Main/index';

function App() {
  return (
    <div>
      <Topo/>
      <Header 
      title="Documentos" 
      title2="Inscrição em Disciplinas" 
      title3="Grades" 
      title4="Dados Pessoais"
      title5="Pesquisa Avaliativa"
      title6="Requerimentos"
      title7="Ajuda"/>
      <Main 
      name="Stefano Geronimi" 
      course="Engenharia Mecânica" 
      periodo="1º" 
      matricula="000.000.000"
      nivel="Graduação"
      creditos="36"
      carga="6:00"/>
    </div>
  )
}

export default App;
