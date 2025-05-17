// 4. Implement a virtualized list of 1,000 items using `react-window`.

import React from "react";
import { FixedSizeList as List } from "react-window";

const itemCount = 1000;

function Row({ index, style }) {
  return <div style={style}>Item #{index + 1}</div>;
}

function App() {
  return (
    <div style={{ width: 300, height: 400 }}>
      <List height={400} itemCount={itemCount} itemSize={35} width={300}>
        {Row}
      </List>
    </div>
  );
}

export default App;
