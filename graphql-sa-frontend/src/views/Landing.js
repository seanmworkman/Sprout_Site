/**
 * @fileoverview This file contains the Landing page implementation.
 */ 

 import Alert from 'react-bootstrap/Alert';
 import React, { Component } from 'react';
 import { Image } from 'react-native';
 import {
   Button,
   Tooltip,
   Table
 } from 'reactstrap';

import NavBar from '../components/NavBar.js';

import Footer from '../components/Footer.js';

import Section1_Image from '../images/Section1_Image.PNG';
import Logo from '../images/Logos/SproutTech_Full_Color.svg';
import RandomImage1 from '../images/RandomImage1.PNG';

import NAVSEA from '../images/PartnerLogos/NAVSEA.jpg';
import NIPO from '../images/PartnerLogos/NIPO_logo.png';
import VMASC from '../images/PartnerLogos/VMASC.png';


import '../components/Style/landing.css';

import ApartmentIcon from '@mui/icons-material/Apartment';

// let client;

// client = new ApolloClient({
//   uri: "http://127.0.0.1:4000/graphql"
// });


 class Landing extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        alertMessage: "",
        showDangerAlert: false,
        // navseaTooltipOpen: false,
        // nipoTooltipOpen: false,
        // vmascTooltipOpen: false,
      };
    }  
  
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    // toggleNavseaTooltip = () => {
    //   this.setState({navseaTooltipOpen: !this.state.navseaTooltipOpen});
    // }

    // toggleNipoTooltip = () => {
    //   this.setState({nipoTooltipOpen: !this.state.nipoTooltipOpen});
    // }

    // toggleVmascTooltip = () => {
    //   this.setState({vmascTooltipOpen: !this.state.vmascTooltipOpen});
    // }
  
    /**
     * Sets the success alert message and the show state.
     */
    setDangerAlert = (message) => {
      this.setState({
        alertMessage: message,
        showDangerAlert: true
      });
    }
  
    /**
     * Displays the danger alert. This method is called in render.
     */
    showDangerAlert = () => {
      if (this.showDangerAlert) {
        return (
          <Alert variant="danger" onClose={() => this.setState({ showDangerAlert: false })} dismissible>
            <h4>{this.state.alertMessage}</h4>
          </Alert>
        );
      }
    }
  
    clickedElementIsButton = (element) => {
      return typeof element.target.className === 'string' && element.target.className.includes("btn");
    }
  
    closeAlertMessage = (e) => {
      if ((this.state.showDangerAlert === true)
        && !this.clickedElementIsButton(e)) {
        this.setState({ showDangerAlert: false });
      }
    }

    tryOurTeam = () => {
      window.location.href = '/#/OurTeam';
    }

    tryServices = () => {
      window.location.href = '/#/Services';
    }
  
    render() {
      return (
        <div style={{ 
          // backgroundColor: '#F2F2F2' 
          }} onClick={(e) => this.closeAlertMessage(e)}>
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
                <div style={{ height: '5%', marginTop: '5%', textAlign: "center", display: 'flex' }}>
                    <Image style={{
                        height: 500,
                        width: 500,
                        resizeMode: 'contain',
                        flex: 1,
                        alignSelf: 'center'
                    }} source={Logo} />
                </div>
                <div className='section1'>
                    <div className='left'>
                        <Image style={{
                            height: 500,
                            width: 550,
                            resizeMode: 'contain',
                            flex: 1,
                        }} source={Section1_Image} />
                    </div>
                    <div className='right'>
                        <span style={{ fontSize: '45px', color: 'blue' }}>
                            We are technology professionals {"  "}
                        </span>
                        <span style={{ fontSize: '45px', color: '#011f73' }}>
                            who have solved some of our government's biggest strategic challenges.
                        </span>
                        <br />
                        <div style={{ color: '#022b9c' }}>
                            With decades of combined experience in warfighter support, we work tirelessly to accelerate government 
                            program and product modernization using next-gen design, planning, operations, and artificial intelligence approaches.
                        </div>
                        <br />
                        <Table>
                            <tbody>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <ApartmentIcon />
                                        <div style={{ fontSize: '25px', color: '#011f73' }}>Advanced Intelligence</div>
                                        <div style={{ color: '#022b9c' }}>
                                            TODO: Add langauge about artificial intelligence.
                                        </div>
                                    </td>
                                    <td style={{ width: '50%' }}>
                                        <ApartmentIcon />
                                        <div style={{ fontSize: '25px', color: '#011f73' }}>Workflow Automation</div>
                                        <div style={{ color: '#022b9c' }}>
                                            We work with your experts to make solutions to optimize productivity, 
                                            reduce waste, expose risk, and grow defense capabilities.
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="section2">
                    <div className='left2'>
                      At Sprout Technologies, we know the challenges inherent to modernization and strategic alignment. 
                      That's why we support intelligence & enterprise quality as the core of federal software.
                    </div>
                    <div className='right2'>
                      <Button color='warning' style={{ paddingRight: '1%' }} onClick={() => this.tryOurTeam()}>MEET OUR TEAM</Button>{'  '}
                      <Button outline color='warning' onClick={() => this.tryServices()}>LEARN ABOUT OUR PRODUCTS</Button>
                    </div>
                </div>
                <div className='section3'>
                  <div className='left3'>
                        <Table style={{ textAlign: 'center', fontSize: '25px' }}>
                          <thead>
                            <tr style={{ color: '#011f73' }}>
                              <th>RESEARCH COLLABORATION TOOLS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: 'left', color: 'blue' }}>AI SERVICES</td>
                            </tr>
                            <tr style={{ color: 'blue' }}>
                              <td>SOFTWARE DESIGN & DEVELOPMENT</td>
                            </tr>
                            <tr style={{ color: 'blue' }}>
                              <td>RESEARCH INTEGRATION & COMMERCIALIZATION</td>
                            </tr>
                            <tr style={{ textAlign: 'left', color: 'blue' }}>
                              <td>AGILITY PRODUCTS</td>
                            </tr>
                          </tbody>
                        </Table>
                  </div>
                  <div className='right3'>
                        <Image style={{
                              height: 500,
                              width: 100,
                              flex: 1,
                          }} source={RandomImage1} />
                      {/* <br />
                      <div style={{ color: '#011f73', fontSize: '20px' }}>
                        Acquisitions Management
                      </div> <br />
                      <div style={{ color: '#011f73', fontSize: '15px' }}>
                        Our products are at the heart of DoD acquisitions programs, driving inter-agency and international collaboration.
                      </div> */}
                  </div>
                </div>
                <div className='section4'>
                  PARTNERS AND CUSTOMERS
                  <br />
                  <Table style={{ textAlign: 'center', display: 'inline' }}>
                    <tbody>
                      <tr>
                        <td>
                        <Image style={{
                              height: 100,
                              width: 100,
                              resizeMode: 'contain',
                              flex: 1,
                              alignSelf: 'center'
                          }} source={NAVSEA} />
                        {/* <Tooltip placement="bottom" isOpen={this.state.navseaTooltipOpen} target="home" toggle={this.toggleNavseaTooltip}>
                          NAVSEA
                        </Tooltip> */}
                        </td>
                        <td>
                        <Image style={{
                              height: 100,
                              width: 100,
                              resizeMode: 'contain',
                              flex: 1,
                              alignSelf: 'center'
                          }} source={NIPO} />
                        {/* <Tooltip placement="bottom" isOpen={this.state.nipoTooltipOpen} target="home" toggle={this.toggleNipoTooltip}>
                          NIPO
                        </Tooltip> */}
                        </td>
                        <td>
                        <Image style={{
                              height: 100,
                              width: 100,
                              resizeMode: 'contain',
                              flex: 1,
                              alignSelf: 'center'
                          }} source={VMASC} />
                        {/* <Tooltip placement="bottom" isOpen={this.state.vmascTooltipOpen} target="home" toggle={this.toggleVmascTooltip}>
                          VMASC
                        </Tooltip> */}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>


            <Footer />
            </div>
          
        </div>
      );
    }
  }
  
  export default Landing;
