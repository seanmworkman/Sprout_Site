import React, { Component } from 'react';
import './Style/footer.css';

const uuidv4 = require('uuid/v4');

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classification: process.env.REACT_APP_CLASS,          
    };
  }


  render() {
    return (
        <div style={{ height: '30px' }}>
            <div key={uuidv4()} className="footer bottom" style={{
                backgroundColor: '#093782', color: 'white',
            }}>
                © 2022 Sprout Technologies LLC. All rights reserved.
            </div>
          
        </div>
    );
  }
}

export default Footer;