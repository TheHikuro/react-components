import { AlertContextType } from "components/alert/alert";
import React from "react";

type HikuroTheme = AlertContextType

type ProviderType = {
    theme: HikuroTheme
    children: React.ReactElement
}

const HikuroThemeContext = React.createContext<HikuroTheme>(null);

const HikuroThemeProvider = ({ theme, children }: ProviderType) => {
    return <HikuroThemeContext.Provider value={theme}>{children}</HikuroThemeContext.Provider>;
};

const useHikuroTheme = () => React.useContext(HikuroThemeContext);

export { HikuroThemeProvider, useHikuroTheme };
export type { HikuroTheme };