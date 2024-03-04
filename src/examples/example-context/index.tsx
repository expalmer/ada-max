import "./styles.css";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ThemeProvider } from "./ThemeContext";

export const ExampleContext = () => {
  return (
    <ThemeProvider>
      <div className="Container">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
