import "./App.css";
import Header from "./components/Header";

import Box from "./components/Box";
import "./styles/header.css";
import "./styles/box.css";
import "./styles/moreinfo.css"
import Moreinfo from "./components/Moreinfo";

function App() {
  return (
    <>
      <div className="boxmodel">
        <div className="main">
          <Header />
        </div>
        <div >
          <div className="boxes">
            <Box />
            <Moreinfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
