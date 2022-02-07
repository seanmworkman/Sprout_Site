import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';

import '../components/Style/landing.css';

class Services extends Component {
  

  render() {
    return (
      <div style={{ backgroundColor: '#F2F2F2' }} onClick={(e) => this.closeAlertMessage(e)}>
          {/* <div id="message">
            <div style={{ padding: "5px" }}>
            <div id="inner-message">
                  {this.state.showAlertMessage ? this.showAlertMessage() : null}
                </div>
              <div id="inner-message">
                {this.state.showDangerAlert ? this.showDangerAlert() : null}
                {this.state.showSuccessAlert ? this.showSuccessAlert() : null}
              </div>
            </div>
          </div> */}

          <div id="container">
          <NavBar />
          </div>
    
      </div>
    );
  }
}

export default Services;