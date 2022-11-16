import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import AnotherBrowser from "./routes/AnotherBrowser";
import Packed from "./routes/Packed";
import SelectColor from "./routes/SelectColor";
import SelectDefault from "./routes/SelectDefault";
import SelectOption from "./routes/SelectOption";
import End from "./routes/End";

function App() {
  return (
    <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/choose_another" element={<AnotherBrowser />}></Route>
        <Route path="/packed" element={<Packed />}></Route>
        <Route path="/select_color" element={<SelectColor />}></Route>
        <Route path="/select_default" element={<SelectDefault />}></Route>
        <Route path="/select_option" element={<SelectOption />}></Route>
        <Route path="/end" element={<End />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
