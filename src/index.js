import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from "./components/MyComponent";
import './index.scss';

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<MyComponent title="Bangladesh" />);

