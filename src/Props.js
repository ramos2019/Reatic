import React, { Component } from 'react';
import Panel from './Panel';


export default class Props extends Component {

    constructor(props) {
        super(props);
        const { attr, attr1, attr2, attr3} = this.props;
        console.log( attr, attr1, attr2, attr3)
        // this.props = {

        // };
    }

    render() {
        const { attr, attr1, attr2, attr3} = this.props;
        return (
            <div>
                { attr === 'span' ? <p>PROPS</p> : <h1>PROPS</h1> }
                <Panel headercolor="red" bordercolor="blue" headertext="This is a header" data="School of Net" />
                <Panel headercolor="gray" bordercolor="purple" headertext="This is a header" data="School of Net" />

            </div>
            // <p>PROPS</p>
        );
    }
}