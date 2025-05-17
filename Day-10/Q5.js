// 5. Use the Performance API to measure and log a heavy computation duration.

import React from "react";

function heavyComputation() {
  // Example: sum numbers from 1 to 1e8
  let sum = 0;
  for (let i = 1; i <= 1e8; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const handleCompute = () => {
    performance.mark("start-heavy");
    const result = heavyComputation();
    performance.mark("end-heavy");
    performance.measure("heavyComputation", "start-heavy", "end-heavy");
    const measure = performance.getEntriesByName("heavyComputation")[0];
    console.log(`Heavy computation result: ${result}`);
    console.log(`Duration: ${measure.duration.toFixed(2)} ms`);
    performance.clearMarks();
    performance.clearMeasures();
  };

  return (
    <div>
      <button onClick={handleCompute}>Run Heavy Computation</button>
    </div>
  );
}

export default App;
