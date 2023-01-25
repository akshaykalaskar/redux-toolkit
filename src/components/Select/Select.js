import { Options } from "components/Select/Options";
export const Select = ({ countryList }) => {
  return (
    <div className="row align-items-center pt-2 pb-3">
      <div className="col-md-3 ps-5">
        <label htmlFor="country" className="form-label mb-0">
          Country:
        </label>
      </div>
      <div className="col-md-9 pe-5">
        <select
          name="selectedCountryStep1"
          className="form-control"
          id="country"
        >
          <Options countryList={countryList} />
        </select>
      </div>
    </div>
  );
};
