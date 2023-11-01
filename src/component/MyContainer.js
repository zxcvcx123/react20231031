import mystyle from "../css/style2.module.css";
export function MyContainer() {
  return (
    <div>
      <h1 className={`${mystyle.boxClass} ${mystyle.error} ${mystyle.note}`}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
