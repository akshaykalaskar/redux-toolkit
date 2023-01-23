import sty from "./style.module.css";
export function ButtonPrimary({ handleOnClick }) {
  return (
    <>
      <hr className="mx-n3" />
      <div className="row align-items-center px-5 py-4">
        <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Save & Continue</button>
      </div>
    </>
  );
}
