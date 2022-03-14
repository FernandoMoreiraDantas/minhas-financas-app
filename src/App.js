import react from "react";
import Login from "./views/login";

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends react.Component {
 
  render() {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

export default App;
