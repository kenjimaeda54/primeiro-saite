import {Component} from 'react';
import Proptypes from 'prop-types';
 
class Pokecard extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            infos: "",
            inputNome: "",
            deveFetch:false,
        };
    }
componentDidMount(){
  fetch ("http://localhost:5000/",{
        method:"GET",
        Headers:{}
    }).then(
        (resposta) => resposta.json()      
    ).then(
         (resJson) => {
              this.setState({infos: resJson})
    } 
  );
}


componentDidUpdate(prevProps, prevState){ 
    if (this.state.deveFetch){
    fetch ("http://localhost:5000/",{
        method:"GET",
        headers:{}
    }).then(
        (resposta) => resposta.json()
    ).then(
       ( resJson) =>{
             this.state({infos: resJson,deveFetch:false, });

       }
    );
   }
 }

 inserirNome(nome){
     fetch("http://localhost:5000/",{
         method:"POST",
         headers:{
             "Content-types":"aplication/json"
         },
         body: JSON.stringify({todo:nome})
     }).then((response) => {
         this.setState({deveFetch:true})
     });

 }
   



    render(){
        const {nome} = this.state;
        return(
            <>
            <div>
                <input
                    type="text"
                    value={nome}
                    onChange ={(event) => {
                        const NovoEvento = {nome: event.target.value}
                        this.setState(NovoEvento)
                    }}
                />
                <button
                        onClick  = {(event)=>{
                        this.inserirNome(nome);
                    }}
                    >          
                Enviar
             </button>
            </div>

             <Card
                title={nome}
                text={infos}
            />  
            </>
        )
    }
}

export default Pokecard;