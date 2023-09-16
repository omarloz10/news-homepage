import "./NewStyle.css";

interface Props {
  title?: string;
  text?: string;
}
export default function New({
  title = "New",
  text = "khsldahksdklasdklasdljkahsdlkasd",
}: Props) {
  return (
    <div className="aside__news-new">
      <div className="aside__news-new-title">
        <h3>{title}</h3>
      </div>
      <div className="aside__news-new-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
