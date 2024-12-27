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
    list: {
        marginTop: "20px",
    },
    listItem: {
        paddingBottom: "20px",
        display: "flex",
    },
    icon: {
        marginRight: "10px",
    },
    itemText: {
        fontSize: react_components_1.tokens.fontSizeBase300,
        fontColor: react_components_1.tokens.colorNeutralBackgroundStatic,
    },
    welcome__main: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    message: {
        fontSize: react_components_1.tokens.fontSizeBase500,
        fontColor: react_components_1.tokens.colorNeutralBackgroundStatic,
        fontWeight: react_components_1.tokens.fontWeightRegular,
        paddingLeft: "10px",
        paddingRight: "10px",
    },
});
var HeroList = function (props) {
    var items = props.items, message = props.message;
    var styles = useStyles();
    var listItems = items.map(function (item, index) { return (React.createElement("li", { className: styles.listItem, key: index },
        React.createElement("i", { className: styles.icon }, item.icon),
        React.createElement("span", { className: styles.itemText }, item.primaryText))); });
    return (React.createElement("div", { className: styles.welcome__main },
        React.createElement("h2", { className: styles.message }, message),
        React.createElement("ul", { className: styles.list }, listItems)));
};
exports.default = HeroList;
//# sourceMappingURL=HeroList.js.map