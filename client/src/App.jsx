import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Login_register } from "./pages";
import { Products } from "./pages";
import { Cart } from "./pages";
import { Header } from "./components";
import { ToggleFormProvider } from "./contextApi/ToggleFormContext";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToggleFormProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login_register />} />
        </Routes>
      </ToggleFormProvider>
    </BrowserRouter>
  );
}

export default App;
