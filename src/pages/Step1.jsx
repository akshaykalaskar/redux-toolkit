import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formActions } from "store/form-slice";
import COUNTRY_LIST from "data/defaultCountryList";
import { arrayObjectToString } from "utility/util";
import { Select } from "components/Select/Select";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";

export function Step1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName, defaultCountryList, selectedCountryStep1 } =
    useSelector((state) => state.form.step1Data);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let formValues = { defaultCountryList: arrayObjectToString(COUNTRY_LIST) };
    const formData = new FormData(event.currentTarget);

    for (let entry of formData.entries()) {
      formValues[entry[0]] = entry[1];
    }

    dispatch(formActions.addFormDataStep1(formValues));
    navigate("/step2");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h5 className="text-center m-2">Step 1</h5>
      <hr className="mx-n3" />

      <div className="row align-items-center pt-4 pb-3">
        <div className="col-md-3 ps-5">
          <label htmlFor="firstName" className="form-label mb-0">
            First Name:*
          </label>
        </div>
        <div className="col-md-9 pe-5">
          <input
            type="text"
            defaultValue={firstName}
            name="firstName"
            id="fname"
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="row align-items-center pt-2 pb-3">
        <div className="col-md-3 ps-5">
          <label htmlFor="lastName" className="form-label mb-0">
            Last Name:
          </label>
        </div>
        <div className="col-md-9 pe-5">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
          />
        </div>
      </div>

      <div className="row align-items-center pt-2 pb-3">
        <div className="col-md-3 ps-5">
          <label htmlFor="dateTime" className="form-label mb-0">
            Date & Time:
          </label>
        </div>
        <div className="col-md-9 pe-5">
          <input
            type="datetime-local"
            name="dateTime"
            className="form-control"
            id="dateTime"
            defaultValue="2023-01-23T19:30"
          />
        </div>
      </div>

      <Select />
      <ButtonPrimary />
    </form>
  );
}
