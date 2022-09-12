import React from "react";
import ReactDOM from "react-dom";
import ChatContainer from "./components/ChatContainer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ChatContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
