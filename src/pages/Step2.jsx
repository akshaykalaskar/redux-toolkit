import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "store/formSlice";
import { Table } from "components/Table/Table";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";

export const Step2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName, defaultCountryList, selectedCountryStep1 } =
    useSelector((state) => state.form.step1Data);
  const [checkedCountries, setCheckedCountries] = useState([
    selectedCountryStep1,
  ]);

  useEffect(() => {
    !firstName && navigate("/");
  }, [firstName, navigate]);

  const handleCountry = useCallback(
    (event) => {
      const checkboxSelected = event.target.getAttribute("name");
      if (event.target.checked) {
        setCheckedCountries((checkedCountries) => [
          ...checkedCountries,
          checkboxSelected,
        ]);
      } else {
        setCheckedCountries(
          checkedCountries.filter((value) => value !== checkboxSelected)
        );
      }
    },
    [checkedCountries]
  );

  const handleOnClick = () => {
    dispatch(
      formActions.addSelectedCountryStep2({
        selectedCountryStep2: checkedCountries,
      })
    );
    navigate("/step3");
  };

  return (
    <>
      <h5 className="text-center m-2">Step 2</h5>
      <hr className="mx-n3" />

      <div className="row align-items-center pt-1">
        <p className="col-md-12 ps-5">
          Hi, {firstName} {""} {lastName}
        </p>

        <p className="col-md-12 ps-5">
          You can select multiple countries from below list.
        </p>
      </div>
      <Table
        defaultCountryList={defaultCountryList}
        selectedCountryStep1={selectedCountryStep1}
        handleCountry={handleCountry}
      />
      <ButtonPrimary handleOnClick={handleOnClick} />
    </>
  );
};
