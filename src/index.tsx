import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

let app = document.getElementById("app");
if (app != null) {
    const root=ReactDOM.createRoot(app);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
}

