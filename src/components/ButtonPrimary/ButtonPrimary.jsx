export function ButtonPrimary({ handleOnClick }) {
  return (
    <>
      <hr className="mx-n3" />
      <div className="row align-items-center px-5 py-4">
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleOnClick}
        >
          Save and Proceed
        </button>
      </div>
    </>
  );
}
