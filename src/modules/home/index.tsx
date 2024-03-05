import { useTheme } from "../../examples/example-context/ThemeContext";

export const Home = () => {
  const { theme, toggle } = useTheme();
  return (
    <>
      <h1>Home {theme}</h1>
      <button className="btn btn--primary" onClick={() => toggle()}>
        TROCA
      </button>
    </>
  );
};
