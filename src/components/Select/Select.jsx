import sty from "./style.module.css";
export function Select({ children, onClick }) {
  return (
    <div className="row align-items-center pt-2 pb-3">
      <div className="col-md-3 ps-5">
        <label htmlFor="country" className="form-label mb-0">Country:</label>
      </div>
      <div className="col-md-9 pe-5">
        <select name="selectedCountryStep1" className="form-control" id="country">
          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="China">China</option>
        </select>
      </div>
    </div>
  );
}
