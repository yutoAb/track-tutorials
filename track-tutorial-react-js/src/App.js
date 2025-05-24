// src/App.js
import React, { useState } from "react";

function App() {
  const [messageVisible, setMessageVisible] = useState(false);

  return (
    <div>
      <button id="track-button" onClick={() => setMessageVisible(true)}>
        Click me!!
      </button>
      {messageVisible && <div id="track-text">hello track</div>}
    </div>
  );
}

export default App;
