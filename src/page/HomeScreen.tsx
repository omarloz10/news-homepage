import FeaturedNews from "../components/FeaturedNews/FeaturedNews";
import Navbar from "../components/Navbar/Navbar";
import NewsAside from "../components/NewsAside/NewsAside";
import PrincipalNew from "../components/PrincipalNew/PrincipalNew";

export default function HomeScreen() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main">
        <PrincipalNew></PrincipalNew>
        <NewsAside></NewsAside>
      </main>

      <FeaturedNews></FeaturedNews>
    </>
  );
}
