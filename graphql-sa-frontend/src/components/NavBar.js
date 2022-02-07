import { connect } from 'react-redux';
import { Image } from 'react-native';
import React, { Component, Fragment } from 'react';
import { 
  Tooltip,
  Modal, ModalBody, ModalFooter,
  Button,
  Table,
} from 'reactstrap';

import Logo from '../images/Logos/SproutTech_Full_Color.svg';
// import Logo from '../images/Logos/Snip_logo.PNG';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import './Style/navbar.css';

import Alert from 'react-bootstrap/Alert';
import ApolloClient from 'apollo-boost-upload';
import { createHttpLink } from 'apollo-link-http';
import { HttpLink } from "apollo-boost";

const _ = require("lodash");

const uuidv4 = require('uuid/v4');

let client;
if (process.env.NODE_ENV === 'production') {
    client = new ApolloClient({
        link: createHttpLink({ uri: "http://sprout-server:4000/graphql" })
    });
}
else {
    client = new ApolloClient({
        link: new HttpLink({ uri: 'http://localhost:4000/graphql' })
    })
}

class NavBar extends Component {

    constructor(props) {
      super(props);

      this.state = {
        homeTooltipOpen: false,

        // Contact Modal
        contactOpen: false,

        // Validation
        alertMessage: "",
        showDangerAlert: false,
        showSuccessAlert: false,
      };

      this.toggleHomeTooltip = this.toggleHomeTooltip.bind(this);
    }

    async componentDidMount(){

    }

    
    toggleHomeTooltip = () => {
      this.setState({homeTooltipOpen: !this.state.homeTooltipOpen});
    }

    tryOurTeam = () => {
      window.location.href = '/#/OurTeam';
    }

    tryServices = () => {
      window.location.href = '/#/Services';
    }

    tryLanding = () => {
      window.location.href = '/#/Landing';
    }


    /**
     * Sets the danger alert message and the show state.
     * @param message The alert message to show the user.
     */
    setDangerAlert = (message) => {
        this.setState({
            alertMessage: message,
            showSuccessAlert: false,
            showDangerAlert: true
        });
    }

    /**
     * Sets the success alert message and the show state.
     * @param message The alert message to show the user.
     */
    setSuccessAlert = (message) => {
        this.setState({
            alertMessage: message,
            showSuccessAlert: true,
            showDangerAlert: false
        });
    }

    /**
     * Displays the danger alert. This method is called in render.
     */
    showDangerAlert = () => {
        return (
            <Alert variant="danger" onClose={() => this.setState({ showDangerAlert: false })} dismissible>
                <h4>{this.state.alertMessage}</h4>
            </Alert>
        );
    }

    /**
     * Displays the success alert. This method is called in render.
     */
    showSuccessAlert = () => {
        return (
            <Alert variant="success" onClose={() => this.setState({ showSuccessAlert: false })} dismissible>
                <h4>{this.state.alertMessage}</h4>
            </Alert>
        );
    }

    toggleContactOpen = () => {
        this.setState({
          contactOpen: !this.state.contactOpen
        });
    }

    render(){

        return(
          <div className='header top'>          
            <ul className="sprout-navbar">
                <li className="sprout-navbar-item-2"> <button onClick={(e) => this.tryLanding()} className="b1" id="home"> 
                Home
                {/* <Image style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain',
                        flex: 1,
                      }} source={Logo} />  */}
                </button> </li>
                      {/* <Tooltip placement="bottom" isOpen={this.state.homeTooltipOpen} target="home" toggle={this.toggleHomeTooltip}>
                        Home
                      </Tooltip> */}
                <li className="sprout-navbar-item-2"> <button onClick={(e) => this.tryOurTeam()} className="b1">Our Team</button> </li>
                <li className="sprout-navbar-item-2"> <button onClick={(e) => this.tryServices()} className="b1">Services</button> </li>
                <li className="sprout-navbar-item" style={{ float: "right", paddingRight: "30px" }}> <button onClick={(e) => this.toggleContactOpen()} className="b1">Contact</button> </li>
                
            </ul>

            <Modal isOpen={this.state.contactOpen} toggle={this.toggleContactOpen} scrollable={true} style={{ maxWidth: "80%" }} onClosed={() => this.setState({  })}>
                <ModalBody>
                    <div
                        style={{
                            "height": "100%",
                            "width": "35%",
                            "float": "left"
                        }}
                    >
                      <b>Contact us for a consultation</b><br />
                      As a Service-Disabled Veteran-Owned Small Business with extensive experience contracting for software and research services 
                      in the Federal defense space, we maintain a robust network of research and commercialization professionals. 
                    </div>
                    <div
                        style={{
                            "height": "100%",
                            "width": "65%",
                            "float": "right"
                        }}
                    >
                      <Table>
                        <tbody>
                            <tr>
                                <td><LocationOnIcon /></td>
                                <td>
                                    <b>Address</b><br />
                                    1 Placeholder Court<br />
                                    Norfolk, Virginia 235XX
                                </td>

                                <td><WysiwygIcon /></td>
                                <td>
                                    <b>Contract Vehicles</b><br />
                                    DUNS:<br />
                                    Norfolk, Virginia 235XX
                                </td>
                            </tr>
                            <tr>
                                <td><EmailIcon /></td>
                                <td>
                                    <b>Email</b><br />
                                    contact@sprouttechnologies.us
                                </td>

                                <td><ContactPhoneIcon /></td>
                                <td>
                                    <b>Phone</b><br />
                                    (XXX) XXX-XXXX
                                </td>
                            </tr>
                        </tbody>
                      </Table>
                    </div>
                </ModalBody>
            </Modal>
          </div>
        );
    }

}


export default NavBar;