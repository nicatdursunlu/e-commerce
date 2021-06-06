import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

import { Dashboard } from "./layouts/Dashboard";
import { Nav } from "./layouts/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
