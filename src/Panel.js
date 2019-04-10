import React, { Component } from 'react';


export default class Panel extends Component {

    constructor(props) {
         super(props);
}


    render() {
        const { headercolor, bordercolor, headertext,  data } = this.props;
        return (
            <div className="painel" style={{ border: `2px solid ${bordercolor} `, width: '500px' , height: '100px', position: 'relative' }}>
              <div className="painel=header" style={{ width: '100%' , height: '50px', background: headercolor }}>
                 { headertext }
                </div>
              <div className="painel=body">
              { data }
              </div>
            </div>
        );
    }

}