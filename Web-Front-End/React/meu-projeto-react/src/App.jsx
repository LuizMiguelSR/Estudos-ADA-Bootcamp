import MeuComponente from "./components/MeuComponente"
import MeuBotao from "./components/MeuBotao"

function App() {

  return (
    <div>
      <h1>Olá mundo, React</h1>
      <MeuComponente/>
      <MeuBotao conteudo='me clique'/>

      <MeuBotao conteudo='depois aqui'/>

      <MeuBotao conteudo='e por fim aqui'/>
    </div>
  )
}

export default App
