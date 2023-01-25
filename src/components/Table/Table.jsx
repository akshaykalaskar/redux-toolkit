import { TableRow } from "./TableRow";

export const Table = ({
  defaultCountryList,
  selectedCountryStep1,
  handleCountry,
  details,
}) => {
  const defaultSelected = (rowId) => {
    return selectedCountryStep1 === rowId ? "checked" : false;
  };

  return (
    <div className="justify-content-center w-200 ps-5">
      <table className="table table-bordered">
        <tbody>
          {defaultCountryList &&
            defaultCountryList.map((name) => {
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={defaultSelected(name)}
                      className="custom-control-input"
                      id={`${name}`}
                      name={`${name}`}
                      onChange={handleCountry}
                    />
                  </td>
                </tr>
              );
            })}
          <TableRow
            defaultCountryList={defaultCountryList}
            selectedCountryStep1={selectedCountryStep1}
            handleCountry={handleCountry}
            details={details}
          />
        </tbody>
      </table>
    </div>
  );
};
