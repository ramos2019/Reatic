import React, { Component } from 'react';


export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        }

     //   this.clickMethod = this.clickMethod.bind(this);
    }

    clickMethod = () => {
       // alert('Clicado!!!!');
        this.setState({
            clicked: this.state.clicked + 1
        })
    }

    render() {
        return (
            <div>
                {/* <button type="button" onClick={this.clickMethod.bind(this)}>Click me</button> */}
                <button type="button" onClick={this.clickMethod}>Click me</button>
                <h1>Quantidade de Clicks = {this.state.clicked}</h1>
            </div>
        );
    }

}