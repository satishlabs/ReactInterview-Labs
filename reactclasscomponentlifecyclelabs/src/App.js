
import React, { useState } from "react";
import MyClassComoponent from './MyClassComponent';
import FunctionalLifecycleExample from './FunctionalLifecycleExample';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        Toggle Class Component
      </button>
      {show ? <MyClassComoponent /> : <FunctionalLifecycleExample/>}
    </div>
  );
}

export default App;
