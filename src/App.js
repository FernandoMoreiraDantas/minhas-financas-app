import react from "react";
import Login from "./views/login";
import CadastroUsuario from "./views/cadastroUsuarios";

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends react.Component {
 
  render() {
    return (
      <div>
        <CadastroUsuario/>
      </div>
    )
  }
}

export default App;
