import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import "./styles.css";

function App() {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </head>
      <body>
        <div className="App">
          <Nav />
        </div>
      </body>
    </html>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
