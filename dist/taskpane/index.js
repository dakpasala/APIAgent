"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("./components/App"));
var react_components_1 = require("@fluentui/react-components");
/* global document, Office, module, require, HTMLElement */
var title = "Contoso Task Pane Add-in";
var rootElement = document.getElementById("container");
var root = rootElement ? (0, client_1.createRoot)(rootElement) : undefined;
/* Render application after Office initializes */
Office.onReady(function () {
    root === null || root === void 0 ? void 0 : root.render(React.createElement(react_components_1.FluentProvider, { theme: react_components_1.webLightTheme },
        React.createElement(App_1.default, { title: title })));
});
if (module.hot) {
    module.hot.accept("./components/App", function () {
        var NextApp = require("./components/App").default;
        root === null || root === void 0 ? void 0 : root.render(NextApp);
    });
}
//# sourceMappingURL=index.js.map