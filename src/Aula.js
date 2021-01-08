import PropTypes from "prop-types";
import {useState} from 'react';

function Aula(){
    const  [Novatarefa, setNovatarefa] =useState([]);
    const  [Tarefas, setTarefas] = useState();
    return(
    <div className="Aula">
      <FormTarefa
         Tarefas={Tarefas}
         setTarefas={setTarefas}
         Novatarefa={Novatarefa}
         setNovatarefa={setNovatarefa}
      />
      <ListaNovatarefa
          Novatarefa={Novatarefa}
          setNovatarefa={setNovatarefa}    
      />   
    </div>
    )
}

function FormTarefa (props){
      const {Tarefas,setTarefas,Novatarefa,setNovatarefa,} = props;
      return(
      <form className="tdodo-form" onSubmit={(event) => event.preventDefault()}>
      <input 
          type ="text"
          value = {Tarefas}
          onChange ={(event) => setTarefas(event.target.value)}
      />
      <button
         onClick = {(event)=> {
              setNovatarefa([...Novatarefa, Tarefas]); 
              setTarefas("");
         }}
      >
      Adiconar
      </button>   
      </form> 
      )
    }

FormTarefa.propTypes ={
       Novatarefa: PropTypes.arrayOf(PropTypes.string),
       Tarefas: PropTypes.string,
       setTarefas: PropTypes.func,
       setNovatarefa: PropTypes.func,
}

function ListaNovatarefa(props){
         const {Novatarefa, setNovatarefa} = props;
         return(
          <ul className="lista-toda">
              {Novatarefa.map((Letras, chave) =>
         <li key={chave}>
             <p>{Letras}</p>
         <button
              onClick ={(event)=>{
              const Apagar = Novatarefa.filter((item, idx)=> idx !== chave);
              setNovatarefa(Apagar);      
            }}
         ></button>
         Remover
         </li>     
              )} 
                  
          </ul>           
         )         
      }

ListaNovatarefa.propTypes ={      
       Novatarefa: PropTypes.arrayOf(PropTypes.string),
       setNovatarefa: PropTypes.func,
}

export default Aula;

      




