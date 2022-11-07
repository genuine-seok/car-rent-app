import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { UIProvider } from "./contexts/uiContext";
import { GlobalStyle } from "./style/GlobalStyle";
import { theme } from "./style/theme";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Router>
          <GlobalStyle />
          <App />
        </Router>
      </UIProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
