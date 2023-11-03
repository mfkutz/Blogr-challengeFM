import { AppProvider } from "./context/Context";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
