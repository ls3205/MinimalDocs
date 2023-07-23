import React from "react";

const ThemeContext = React.createContext({
    theme: "flashbang",
    changeTheme: () => {}
});

export default ThemeContext;