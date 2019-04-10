import React, { Component } from 'react';


export default class Clock2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
                    .toLocaleString('pt-BR', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true
                    })  
        }

       //this.componentDidMount(); 

    }
     
    componentDidMount() {
        //após a sua montagem   
        setInterval(() => {
            this.updateClock()
        }, 1000); 
        //alert('Chamou');
      }   
      
    componentWillUnmount() { 
        // enquanto está sendo desmontado
    }

      updateClock() {
          
          this.setState({
            time: new Date()
            .toLocaleString('pt-BR', { 
                hour: 'numeric',
                minute: 'numeric', 
                second: 'numeric',
                hour12: true
            })
          });

    //       setInterval(() => {
    //         this.setState({
    //           time: new Date()
    //           .toLocaleString('pt-BR', { 
    //               hour:   'numeric',
    //               minute: 'numeric', 
    //               second: 'numeric',
    //               hour12:  true
    //           })
    //         });
    //       }, 1000);
    //   }

        }
      
    render() {
        const { time } = this.state;
        return (
            <h1>{ time }</h1>
        );
    }
}