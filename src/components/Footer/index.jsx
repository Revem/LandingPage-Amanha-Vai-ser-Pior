import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import rasgo from "../../img/rasgo.png";
import Twitter from "../../img/twitter.png";
import Youtube from "../../img/youtube.png";

export default function Footer(props) {
  return (
    <div>
      <img className="rasgo" src={rasgo} />

      <div className="footer" style={{ margin: 0 }}>
        <h1 className="contato">
          <span style={{ color: "#00000017" }}>TO</span>CONTATO
          <span style={{ color: "#00000017" }}>CONTATOCONTATOCONTAT</span>
        </h1>
        <form
          action="mailto:contato@amanhavaiserpior.com"
          method="post"
          enctype="multipart/form-data"
          name="EmailForm"
        >
          <div className="nome">
            <label for="name">NOME:</label>
            <br />
            <input type="text" id="name" name="name" />
          </div>

          <div className="mensagem">
            <label for="name" style={{ marginLeft: "0px" }}>
              MENSAGEM:
            </label>
            <br />
            <textarea type="text" id="message" name="message" />
            <button className="botao2">ENVIAR</button>
          </div>
          <div className="email">
            <label for="email">E-MAIL:</label>
            <br />
            <input type="email" id="email" name="email" />
          </div>
          <div className="socialmedia">
            <img src={Facebook} className="facebook" />
            <img src={Instagram} className="instagram" />
            <img src={Twitter} className="twitter" />
            <img src={Youtube} className="youtube" />
          </div>
        </form>
        <div className='copyright'
        >
          Landing page feita por @VickSiebra
        </div>
      </div>
    </div>
  );
}
