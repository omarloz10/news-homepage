import "./NewAsideStyle.css";
import New from "./New/New";
export default function NewsAside() {
  return (
    <aside>
      <div className="aside__news">
        <div className="aside__news-title">
          <h2>New</h2>
        </div>
        <div className="aside__news-news">
          <New
            title="Hydrogen VS Electric Cars"
            text="Will hydrogen-fueled cars ever catch up to EVs?"
          ></New>
          <New
            title="The Downsides of AI Artistry"
            text="What are the possible adverse effects of on-demand AI image generation?"
          ></New>
          <New
            title="Is VC Funding Drying Up?"
            text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          ></New>
        </div>
      </div>
    </aside>
  );
}