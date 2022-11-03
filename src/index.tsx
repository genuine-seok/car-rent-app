import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { GlobalStyle } from "./style/GlobalStyle";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </QueryClientProvider>
);
