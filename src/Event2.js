import React, { Component } from 'react';


export default class Event2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            data: []
        }
    
    }

    handleChange = (event) => {
        this.setState({
          
            nome: event.target.value,
           
        })

      //  console.log('Estado', this.state)
    } 

    insertToData = () => {
        const arr = this.state.data;
        arr.push(this.state.nome);
        this.setState({
            nome: '',
            data: arr
        })
       // this.state.data.push(this.state.nome)
        console.log('Array ', this.state)
    }

   
    render() {
        const { data } = this.state;
        return (
           
            <div>
                <input type="text" name="nome" id="nome" placeholder="Entre com o Nome" onChange={this.handleChange} />
                
                <button type="button" onClick={this.insertToData} >Ok!</button>
                {/* <h1>{ this.state.nome }</h1>  */}
                <ul>
                    {data.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                </ul>

            </div>
        );
    }

}