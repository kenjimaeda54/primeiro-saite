import Proptypes, { element } from 'prop-types';
import {useState} from 'react';
import Comum from './Comum';
import Singup from './Singup';
import "./css/app.css";
import Banner from './Banner';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function App() {
  const [mainContent,setMainContent] = useState(MainContent.BANNER)
  const navBarOptions =[
       {text:"PREMIUM", content:MainContent.NYI},
       {text:"AJUDA", content:MainContent.NYI},
       {text:"BAIXAR", content:MainContent.NYI},
       {text:"|"}, 
       {text:"INSCREVER-SE", content:MainContent.FORM},
       {text:"ENTRAR", content:MainContent.NYI},
]

  return (
       <BrowserRouter>
       <header className="estilo">
         <Link     
            to= "/"
            >
         <img className="box" url= "/img/projetoMusica.jpeg"/>            
          </Link> 
         <nav className="comportamento">
            <Comum 
            array ={navBarOptions}
             mapFunc={(elem, index)=> <li key={index}>
             <Link style ={{color:'#FFFFFF', textDecoration:'none'}}
                to= 
                {elem.content === MainContent.NYI ?
                           "/nyi"
                 :elem.content === MainContent.FORM &&
                           "/singup"                         
                }
             >  
             <span>{elem.text}</span>
             </Link> 
            </li>
             }
            />   
        </nav>
       </header>
        <main>
         <Switch>
             <Route path="/singup">
              <Singup
               classlogin="corpo1" 
               email="E-mail ou Usuario"
               senha="Senha"
               evento="Login"
               esqueceu= "Esqueceu sua senha?"
               cadastro="Cadastrar"
               facebook= "Facebook"
               gmail="Gmail"
             />    
            
             </Route>
             <Route path="nyi">
                  <p> NYI </p>
             </Route>
             
             <Route path="/">
             <Banner
                className="corpo"
                title = "Escutar muda tudo"
                subtitle = "Milhões de musicas e posdcasts para explorar.Nem precisa de cartão de credito"
                >
                <Link to = "/singup">
                <button  className="botao">
                    OBETENHA O MUSIC FREE
                </button>
                </Link>
            </Banner>
            </Route>
         
         </Switch>
        </main>
      <footer></footer> 
      </BrowserRouter>
       );
}

export default App;

const MainContent = Object.freeze({
  
       NYI:"NYI",
       BANNER: "BANNER",
       SINGUP: "SINGUP",

})
