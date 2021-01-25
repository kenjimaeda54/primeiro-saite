import Proptypes, { array } from 'prop-types';
import facebok from "./img/facebook.jpg"
import gmaeil from "./img/335.jpg";


function Singup (props){
    const {email,senha,bimg,classlogin,evento,esqueceu,cadastro,facebook,gmail} = props;
    return(
   <>
   <body style={bimg && {background:bimg}} class={classlogin}>
    <form class="formulario31">
      <div class="user"><input class="user" type="text" name="nome"  placeholder={email}/></div>    
      <div class="block"><input  type="text" name="number" placeholder={senha}/></div>
  
      <div><input  class="enviar" type="button" value="Login"/></div>
    </form>  
    <ul class="lista31">
      <div>
          <a class="senha">{esqueceu}</a>
      </div>
      <div> 
          <a class="cadastrar">{cadastro}</a>
      </div>  
    </ul> 
    <div>
           <img src={facebok} class="facebook"/>
    </div>
    <div>
          <img src={gmaeil} class="gmail"/>
    </div>
    <div class="botoes">
          <input class="botao1"  type="button" name="enviar" value={facebook}/>
          <input class="botao2"  type="button" name="enviar" value={gmail}/> 
    </div>
    </body> 
   </>  
    )
 }

Singup.propTypes = {
   email: Proptypes.string,
   senha: Proptypes.string,
   bimg:  Proptypes.string,
   classform: Proptypes.string,
   evento: Proptypes.string,
   esqueceu: Proptypes.string,
   cadastro: Proptypes.string,
   facebok: Proptypes.string,
   gmaeil: Proptypes.string,
   usuario: Proptypes.string,
   cadeado: Proptypes.string,
}

export default Singup;