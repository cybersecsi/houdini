import { IHeaderType } from "@/types";
import { useScroll } from "@/utils/hooks";
import { createContext, useContext, useState, useEffect } from "react";

enum ITheme {
  dark = "dark",
  light = "light",
}

const getInitialTheme = (): ITheme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");

    if (typeof storedPrefs === "string") {
      return storedPrefs as ITheme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark" as ITheme;
    }
  }

  return "light" as ITheme; // light theme as the default;
};

interface ProviderInterface {
  theme: ITheme;
  toggleTheme: () => void;
  headerType: IHeaderType;
  setHeaderType: (hType: IHeaderType) => void;
  headerFixed: boolean;
}

const StyleContext = createContext<ProviderInterface | null>(null);

const StyleProvider = ({ children }: any): any => {
  const [theme, setTheme] = useState<ITheme>(getInitialTheme);
  const [headerType, setHeaderType] = useState<IHeaderType>(
    IHeaderType.scrollable
  );
  const [headerFixed, setHeaderFixed] = useState<boolean>(false);

  const rawSetTheme = (rawTheme: ITheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  const toggleTheme = () => {
    const _theme: ITheme =
      theme === "dark" ? ("light" as ITheme) : ("dark" as ITheme);
    setTheme(_theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const handleScroll = () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 224 && headerType === IHeaderType.scrollable) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };

  useScroll(handleScroll);

  return (
    <StyleContext.Provider
      value={{
        theme,
        toggleTheme,
        headerType,
        setHeaderType,
        headerFixed,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};

const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyle must be used within StyleProvider");
  }
  return context;
};

export { StyleProvider, useStyle };
