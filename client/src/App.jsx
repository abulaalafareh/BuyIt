import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login_register from "./pages/Login_register";
import Products from "./pages/Products";
import { Header } from "./components";
import { ToggleFormProvider } from "./contextApi/ToggleFormContext";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToggleFormProvider>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login_register />} />
        </Routes>
      </ToggleFormProvider>
    </BrowserRouter>
  );
}

export default App;
