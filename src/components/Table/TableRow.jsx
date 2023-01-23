import { arrayString, toTitleCase } from "utility/util";

export const TableRow = ({ details }) => {
  return (
    <>
      {details &&
        Object.keys(details).map((key) => {
          let value = "";
          if (
            Object.prototype.toString.call(details[key]) === "[object Array]"
          ) {
            value = arrayString(details[key]);
          } else {
            value = details[key];
          }
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
