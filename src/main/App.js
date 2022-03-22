import react from "react";

import Rotas from "./rotas";
import NavBar from "../components/navBar";

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

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
