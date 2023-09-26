import React, { createContext, useState } from "react";

const ToggleFormContext = createContext();
const ToggleFormProvider = ({ children }) => {
  const [loginForm, setLoginForm] = useState(true);

  const updateToggleForm = () => {
    setLoginForm(!loginForm);
  };

  const ToggleFormContextValue = {
    loginForm,
    updateToggleForm,
  };

  return (
    <ToggleFormContext.Provider value={ToggleFormContextValue}>
      {children}
    </ToggleFormContext.Provider>
  );
};

export { ToggleFormContext, ToggleFormProvider };
