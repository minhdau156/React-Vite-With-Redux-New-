import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { increment, decrement } from "./redux/counter/counter.slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>My current count = {count.value};</h1>

        <div>
          <button onClick={() => dispatch(increment())}>Increment +1</button>
        </div>
        <div>
          <button
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              

              dispatch(decrement());
            }}
          >
            Decrease -1
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
