import sty from "./style.module.css";
export function Checkbox({ name, defaultChecked, handleCountry }) {
  return (
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="custom-control-input"
      id={name}
      name={name}
      onChange={handleCountry}
    />
  );
}
