import FeaturedNew from "./FeaturedNew/FeaturedNew";
import "./FeaturedNewsStyle.css";
import ImageRetroPc from "../../assets/images/image-retro-pcs.jpg";
import ImageLaptops from "../../assets/images/image-top-laptops.jpg";
import ImageGaming from "../../assets/images/image-gaming-growth.jpg";
export default function FeaturedNews() {
  return (
    <footer className="footer">
      <FeaturedNew
        id="01"
        title="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
        image={ImageRetroPc}
      ></FeaturedNew>
      <FeaturedNew
        id="02"
        title="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
        image={ImageLaptops}
      ></FeaturedNew>
      <FeaturedNew
        id="03"
        title="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities."
        image={ImageGaming}
      ></FeaturedNew>
    </footer>
  );
}
