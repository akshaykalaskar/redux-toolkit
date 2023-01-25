import { arrayString, toTitleCase, isArray, getLocalDate } from "utility/util";

export const TableRow = ({ details }) => {
  const generateDetailRow = (allFields) => {
    return (
      <>
        {Object.keys(allFields).map((key) => {
          let value = getFieldType(allFields, key);
          return value ? (
            <tr key={key}>
              <td>{toTitleCase(key)}</td>
              <td>{value}</td>
            </tr>
          ) : null;
        })}
      </>
    );
  };
  return <>{details && generateDetailRow(details)}</>;
};

function getFieldType(details, key) {
  let value = "";
  if (isArray(details[key])) {
    value = arrayString(details[key]);
  } else if (key === "dateTime") {
    value = getLocalDate(details[key]);
  } else {
    value = details[key];
  }
  return value;
}
