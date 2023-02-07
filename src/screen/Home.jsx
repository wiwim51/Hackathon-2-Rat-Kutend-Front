
import Parallax from "../components/Parallax";
import Header from "../components/Header";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="images-container home-global">
      <div className="home-header">
        <Header />
      </div>
      <div className="home-parallax">
        <Parallax />
      </div>
      <div className="home-title">
        <Title />
      </div>
    </div>
  );
};

export default Home;
