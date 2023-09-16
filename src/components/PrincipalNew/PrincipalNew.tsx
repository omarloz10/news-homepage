import ImageMobile from "../../assets/images/image-web-3-mobile.jpg";
import ImageDestokp from "../../assets/images/image-web-3-desktop.jpg";
import "./PrincipalNewStyle.css";

export default function PrincipalNew() {
  return (
    <article>
      <div className="principal__new">
        <picture className="principal__new-image">
          <source media="(max-width: 375px)" srcSet={ImageMobile} />
          <source media="(min-width: 640px)" srcSet={ImageDestokp} />
          <img
            src={ImageMobile}
            alt="Principal New Image"
            className="principal__new-image-img"
          />
        </picture>
        <div className="principal__new-title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="principal__new-text">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="principal__new-button">Read more</button>
        </div>
      </div>
    </article>
  );
}
