import { Table } from "components/Table/Table";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Step3 = () => {
  const navigate = useNavigate();
  const step1Data = useSelector((state) => state.form.step1Data);
  const step2Data = useSelector((state) => state.form.step2Data);
  const details = useMemo(
    () => ({ ...step1Data, ...step2Data }),
    [step1Data, step2Data]
  );

  useEffect(() => {
    !details.firstName && navigate("/");
  }, [details, navigate]);

  return (
    <>
      <h5 className="text-center m-2">Step 3</h5>
      <hr className="mx-n3" />
      <div className="row align-items-center pt-1">
        <p className="col-md-12 ps-5">Thank you, {details.firstName}</p>
        <p className="col-md-12 ps-5">Your details are - </p>
      </div>

      <Table details={details} />
    </>
  );
};
