import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Parallax from "../../components/Parallax";
import Wrapper from "../../components/Wrapper";
import "../../css/App.css";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Wrapper />
      <Parallax />
     <Footer />
    </div>
  );
}

export default Main;
