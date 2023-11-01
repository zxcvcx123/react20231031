import ms from "../css/mystyle.module.css";
export function MyText() {
  return (
    <div>
      {/* red 배경색, white 글자색 */}
      <h1 className={`${ms.error} ${ms.coffee} ${ms.special}`}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
