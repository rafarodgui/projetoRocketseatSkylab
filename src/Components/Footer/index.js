import React, {Component} from 'react';
import './style.css'

export default class Footer extends Component{

    constructor(props){
        super(props);
        this.state ={ 
            nome: 'Rafael Guimarães', 
            hora: new Date()}
        
        this.mudaNome = this.mudaNome.bind(this)
    }

    componentWillMount(){
        this.timer = setInterval(
            () => this.atualizaHora(), 
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    atualizaHora(){
        this.setState({ hora: new Date()});
    }

    mudaNome(){
        if (this.state.nome === 'Front-end Developer'){
            this.setState({ nome: 'Rafael Guimarães'})
        } else{
        this.setState({ nome: 'Front-end Developer' })
        };
    };

    render(){
        return (
    
            <article className="article-footer">
                <p onClick={this.mudaNome} className="name">{this.state.nome}</p>
                <p className="hora">{this.state.hora.toLocaleTimeString()}</p>
            </article>
        );
    }
}