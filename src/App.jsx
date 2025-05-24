import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="center-screen">
      <div className="button-group">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setCount(count + 1)}
        >
          clickme
        </button>

        <h1>{count}</h1>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setCount(count - 1)}
        >
          don't clickme
        </button>
      </div>
    </div>
  );
}
