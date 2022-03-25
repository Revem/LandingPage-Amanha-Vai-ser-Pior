import { Background, Parallax } from "react-parallax";
import fundo from "../../img/fundo.png";

export default function reactParallax(props) {
  return (
    <Parallax blur={{ min: -1, max: 3 }} strength={-800} style={{ zIndex: -1 }}>
      <Background className="custom-bg">
        <div
          style={{
            height: 10000,
            width: "100vw",
            backgroundImage: `url(${fundo})`,
          }}
        />
      </Background>
      <div style={{ height: 800, zIndex: -1, display: "flex" }}></div>
    </Parallax>
  );
}
