import {Component} from 'react';
import PropTypes from 'prop-types';

class TodoListClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            novaTarefa: "",
            listaTarefas: [],
            deveFetch: false
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/", {
            method: "GET",
            headers: {}
        }).then(
            (resposta) => resposta.json()
        ).then(
            (resJson) => {
                console.log(resJson);
                this.setState({listaTarefas: resJson})
            }
        );
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.deveFetch){
            fetch("http://localhost:5000/", {
                method: "GET",
                headers: {}
            }).then(
                (resposta) => resposta.json()
            ).then(
                (resJson) => {
                    console.log(resJson);
                    this.setState({listaTarefas: resJson, deveFetch: false, novaTarefa: ""});
                }
            );
        }
    }

    inserirTarefa(novaTarefa){
        fetch("http://localhost:5000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({todo: novaTarefa})
        }).then((response) => {
            console.log(response);
            this.setState({deveFetch: true})
        });
    }

    removerTarefa(idTarefa){
        fetch("http://localhost:5000", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: idTarefa})
        }).then((response) => {
            this.setState({deveFetch: true});
        })
    }

    render(){
        const {novaTarefa, listaTarefas} = this.state;

        return(
            <>
                <input
                    value={novaTarefa}
                    onChange={(event) => {
                        const novoState = {novaTarefa: event.target.value}
                        this.setState(novoState);
                    }}
                />
                <button
                    onClick={(event) => {
                        this.inserirTarefa(novaTarefa);
                    }}
                >
                    Adicionar
                </button>

                <ul>
                    <li> <h3> Tarefas </h3> </li>
                    {listaTarefas.map((tarefa, indice) => 
                        <ItemLista
                            text={tarefa.todo}
                            index={indice}
                            delFunc={(event) => {
                                this.removerTarefa(tarefa.id);
                            }}
                        />
                    )}
                </ul>
            </>
        );
    }
}

class ItemLista extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(`Sou o ${this.props.text} ${this.props.index} e apareci pela primeira vez`)
    }

    render(){
        const {text, index, delFunc} = this.props;
        return(
            <li key={index}>
                <p>
                    {text}
                </p>
                <button
                    onClick={delFunc}
                >
                    X
                </button>
            </li>
        );
    }
}

ItemLista.propTypes = {
    text: PropTypes.string,
    key: PropTypes.number,
    delFunc: PropTypes.func
}

export default TodoListClass;