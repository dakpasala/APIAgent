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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_components_1 = require("@fluentui/react-components");
var useStyles = (0, react_components_1.makeStyles)({
    welcome__header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "30px",
        paddingTop: "100px",
        backgroundColor: react_components_1.tokens.colorNeutralBackground3,
    },
    message: {
        fontSize: react_components_1.tokens.fontSizeHero900,
        fontWeight: react_components_1.tokens.fontWeightRegular,
        fontColor: react_components_1.tokens.colorNeutralBackgroundStatic,
    },
});
var Header = function (props) {
    var title = props.title, logo = props.logo, message = props.message;
    var styles = useStyles();
    return (React.createElement("section", { className: styles.welcome__header },
        React.createElement(react_components_1.Image, { width: "90", height: "90", src: logo, alt: title }),
        React.createElement("h1", { className: styles.message }, message)));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map