import { useLocalTheme } from "./use-local-theme";
import { useTheme } from "./ThemeContext";

export const Header = () => {
  const global = useTheme();
  const { theme, toggle } = useLocalTheme();

  return (
    <header className="Header">
      <h2>header</h2>
      <p>
        <button onClick={() => global.toggle()}>GLOBAL {global.theme}</button>
      </p>
      <p>
        <button onClick={() => toggle()}>{theme}</button>
      </p>
    </header>
  );
};
