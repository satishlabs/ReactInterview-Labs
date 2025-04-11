import React, { useEffect, useState } from "react";

const FunctionalLifecycleExample = () => {
  const [count, setCount] = useState(0);

  //Mount and unmount lifecycle methods
  useEffect(() => {
    console.log('useEffect: component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

//Update (whenever count changes)
 useEffect(() => {
    if(count> 0){
    console.log('useEffect: component updated');
    }
  }, [count]);

  return (
    <div>
        <h2>Functionla Component LifeCycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default FunctionalLifecycleExample;