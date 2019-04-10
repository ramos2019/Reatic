import React, { Component } from 'react';


export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Alexandre Ramos',
            idade: 37
        };

        console.log(this.state)
}

    componentDidMount() {
      //após a sua montagem      
    }   
    
    componentDidUpdate() {
        // após qualquer update (qualquer altearação)
    }

    componentWillMount() {
        //enquanto está sendo montado    
    }
////////////////////////// Depois utilizaremos //////////////////////////////////////////////
    componentWillUnmount() { 
        // enquanto está sendo desmontado
    }

    componentWillReceiveProps() {
        // a partir do momento que recebe uma nova props
    }

    componentDidCatch() {
        // apartir do momento que captura uma excessão
    }


    render() {
        // const { headercolor, bordercolor, headertext,  data } = this.props;
        const { nome, idade } = this.state;
        return (
            <div>
                <p>State</p>
                <p>{ nome }</p>
                <p>{ idade }</p>
            </div>
            
        );

}

}