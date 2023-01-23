import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Step1 } from "pages/Step1";
import { Step2 } from "pages/Step2";
import { Step3 } from "pages/Step3";
import { Error } from "pages/Error";

export function App() {
  return (<section className="p-5">
    <div className="row d-flex justify-content-center">
      <div className="col-xl-6">
        
        <div className="card">
          <div className="card-body">

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Step1 />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>

          </div>
        </div>

      </div>
    </div>
  </section>
  );
}
