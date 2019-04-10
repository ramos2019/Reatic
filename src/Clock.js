import React, { Component } from 'react';


export default class Clock extends Component {
    render() {
        const returnClock = () => {
           return new Date()
            .toLocaleString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }

        const color = 'red';
        return (
            <h1 className={color}>  
                {
                   returnClock()
                }
                </h1>
        );
    }
}