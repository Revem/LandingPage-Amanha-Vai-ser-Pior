import { Background, Parallax } from "react-parallax";
import fundo from "../../img/fundo.png";

export default function reactParallax(props) {
  return (
    <Parallax blur={{ min: -1, max: 3 }} strength={-800} style={{ zIndex: -1 }} className="parallax">
      <Background className="custom-bg">
        <div
        className="parallax-bg"
          style={{
            backgroundImage: `url(${fundo})`,
          }}
        />
      </Background>
      <div className="parallax2"></div>
    </Parallax>
  );
}
