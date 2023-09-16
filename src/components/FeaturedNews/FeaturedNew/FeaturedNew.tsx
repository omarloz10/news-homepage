import "./FeaturedNewStyle.css";

interface Props {
  id: string;
  title: string;
  text: string;
  image: string;
}
export default function FeaturedNew({ id, title, text, image }: Props) {
  return (
    <div className="featured__new">
      <div className="featured__new-img">
        <img src={image} alt="New Image" />
      </div>
      <div className="featured__new-body">
        <div className="featured__new-body-id">
          <p>{id}</p>
        </div>
        <div className="featured__new-body-title">
          <h4> {title} </h4>
        </div>
        <div className="featured__new-body-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
