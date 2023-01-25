import sty from "./style.module.css";

export function Header() {
  return (
    <div className={`row ${sty.container}`}>
      <div className="col-xs-12 col-sm-8 center">
        Header
      </div>
    </div>
  );
}
