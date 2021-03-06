import React, { Component } from 'react';
import './ListaSonsLinha.css';

class ListaSonsLinha extends Component {
	render() {
		return (
			<li className="ListaSonsLinha">
				<img src={process.env.PUBLIC_URL+"/imgs/"+this.props.children.imagem} alt="Icone do cartucho" onClick={()=>this.props.inserirCartucho(this.props.idCartucho)}/>
				<span>{this.props.children.nome}</span>
			</li>
		);
	}
}

export default ListaSonsLinha;