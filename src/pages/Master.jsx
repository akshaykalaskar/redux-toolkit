import { Outlet } from "react-router-dom";

export function Master() {
  return (
    <section className="p-5">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
