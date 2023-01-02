import "./App.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to tooltip react app.</h1>
      <h2>Hover to see the tooltip.</h2>

      <div className="wrapper">
        <div>
          <Tippy theme="dark" animation="scale" content="Hey I am the Left Tooltip" placement="left">
            <span className="span">Hover Me</span>
          </Tippy>
        </div>
        <div>
          <Tippy theme="dark" animation="scale" content="Hey I am the Top Tooltip" placement="top">
            <span className="span">Hover Me</span>
          </Tippy>
        </div>
        <div>
          <Tippy theme="dark" animation="scale" content="Hey I am the Bottom Tootip" placement="bottom">
            <span className="span">Hover Me</span>
          </Tippy>
        </div>

        <div>
          <Tippy theme="dark" animation="scale" content="Hey I am the Right Tooltip" placement="right">
            <span className="span">Hover Me</span>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

export default App;
