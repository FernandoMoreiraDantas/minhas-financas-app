import react from "react";
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import Rotas from "./rotas";
import NavBar from "../components/navBar";

class App extends react.Component {
 
  render() {
    return (
      <>
        <NavBar/>
        <div className="container">
          <Rotas/>
        </div>
      </>
      
    )
  }
}

export default App;
