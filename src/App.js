import "./App.css";

// imports from TippyJs
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <h1>Welcome to tooltip react app.</h1>
      {/* Guide */}
      <h2>Hover to see the tooltip.</h2>

      {/* Container */}
      <div className="wrapper">
        <div>
          {/* Tippy Component */}
          <Tippy
            theme="dark"
            animation="scale"
            content="Hey I am the Left Tooltip"
            placement="left"
          >
            {/* for left tooltip */}

            <span className="span">Hover Me</span>
          </Tippy>
        </div>
        <div>
          {/* Tippy Component */}

          <Tippy
            theme="dark"
            animation="scale"
            content="Hey I am the Top Tooltip"
            placement="top"
          >
            {/* for top tooltip */}

            <span className="span">Hover Me</span>
          </Tippy>
        </div>

        <div>
          {/* Tippy Component */}
          <Tippy
            theme="dark"
            animation="scale"
            content="Hey I am the Bottom Tootip"
            placement="bottom"
          >
            {/* for bottom tooltip */}
            <span className="span">Hover Me</span>
          </Tippy>
        </div>

        <div>
          {/* Tippy Component */}
          <Tippy
            theme="dark"
            animation="scale"
            content="Hey I am the Right Tooltip"
            placement="right"
          >
            {/* for right tooltip */}

            <span className="span">Hover Me</span>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

export default App;
