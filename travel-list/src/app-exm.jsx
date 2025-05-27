import React, { useState } from "react";

export default function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);
  return (
    <div>
      <h2>Parent Componet</h2>
      <p>Parent Count: {parentCount}</p>
      <button onClick={() => setParentCount((prev) => prev + 1)}>
        Update Parent State
      </button>
      <ChildComponent propValue={parentCount} />
    </div>
  );
}

function ChildComponent({ propValue }) {
  const [childState, setChildState] = useState(0);

  return (
    <div>
      <h3>Child Component</h3>
      <p>Prop from Parent: {propValue}</p>
      <p>Child Internal State: {childState}</p>

      <button onClick={() => setChildState((prev) => prev + 1)}>
        Update Child Component
      </button>
    </div>
  );
}
