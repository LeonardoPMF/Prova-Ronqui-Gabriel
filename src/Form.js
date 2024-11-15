import React, { Component } from 'react';
import './Form.css';  // Arquivo de CSS

class Form extends Component {
    state = {
        name: "",
        endereco: "",
        bairro: "",
        cidade: "",
        pais: ""
    };

    handleSubmit = (e, field) => {
        e.preventDefault();
        console.log(`${field} enviado:`, this.state[field]);
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { name, endereco, bairro, cidade, pais } = this.state;

        return (
            <section className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={(e) => this.handleSubmit(e, 'name')} type="button">Enviar</button>
                        {name && <p className="output">{name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input
                            id="endereco"
                            name="endereco"
                            type="text"
                            placeholder="Digite seu endereço"
                            value={endereco}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={(e) => this.handleSubmit(e, 'endereco')} type="button">Enviar</button>
                        {endereco && <p className="output">{endereco}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="bairro">Bairro</label>
                        <input
                            id="bairro"
                            name="bairro"
                            type="text"
                            placeholder="Digite seu bairro"
                            value={bairro}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={(e) => this.handleSubmit(e, 'bairro')} type="button">Enviar</button>
                        {bairro && <p className="output">{bairro}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            id="cidade"
                            name="cidade"
                            type="text"
                            placeholder="Digite sua cidade"
                            value={cidade}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={(e) => this.handleSubmit(e, 'cidade')} type="button">Enviar</button>
                        {cidade && <p className="output">{cidade}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="pais">País</label>
                        <input
                            id="pais"
                            name="pais"
                            type="text"
                            placeholder="Digite seu país"
                            value={pais}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={(e) => this.handleSubmit(e, 'pais')} type="button">Enviar</button>
                        {pais && <p className="output">{pais}</p>}
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;
