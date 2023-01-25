import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Step1 } from "pages/Step1";
import { Step2 } from "pages/Step2";
import { Step3 } from "pages/Step3";
import { Error } from "pages/Error";
import { Master } from "pages/Master";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
