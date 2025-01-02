"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend_Url = void 0;
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
const sonner_tsx_1 = require("./components/ui/sonner.tsx");
exports.Backend_Url = import.meta.env.VITE_BACKEND_URL;
(0, client_1.createRoot)(document.getElementById("root")).render(<react_1.StrictMode>
    <App_tsx_1.default />
    <sonner_tsx_1.Toaster />
  </react_1.StrictMode>);
