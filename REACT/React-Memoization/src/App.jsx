import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  // datayı fonksiyonun dışında tanımla veya useMemo kullan. Yoksa header re-render edilir.
  const data = React.useMemo(() => {
    return { name: "Furkan" };
  }, []);

  return (
    <>
      <Header data={data} />
      <hr />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
