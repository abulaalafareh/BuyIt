import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login_register from "./pages/Login_register";
import { ToggleFormProvider } from "./contextApi/ToggleFormContext";
function App() {
  return (
    <BrowserRouter>
      <ToggleFormProvider>
        <Routes>
          <Route path="/" element={<Login_register />} />
        </Routes>
      </ToggleFormProvider>
    </BrowserRouter>
  );
}

export default App;
