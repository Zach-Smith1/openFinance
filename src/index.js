import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";

const mountNode = document.getElementById("home");
const root = createRoot(mountNode);
root.render(<Home/>);
