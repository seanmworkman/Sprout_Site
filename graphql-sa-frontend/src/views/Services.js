import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import '../components/Style/services.css';

import {
  Button,
  Modal, ModalBody, ModalHeader,
  Table,
  Alert
} from 'reactstrap';

import ApartmentIcon from '@mui/icons-material/Apartment';

let projectDict = {
  "iPOET": "TBD",
  "PRIOR": "TBD",
  "MUSE": "TBD"
};

class Services extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      alertMessage: "",
      showDangerAlert: false,
      selectedProject: "iPOET",
      projectOpen: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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

  toggleProjectOpen = () => {
    this.setState({
      projectOpen: !this.state.projectOpen
    });
  }

  render() {
    return (
        <div onClick={(e) => this.closeAlertMessage(e)}>
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
            <NavBar />
              <div className='section1Services' style={{
                marginRight: '35%',
                marginLeft: '35%',
                marginTop: '5%',
                height: '50%',
                textAlign: 'center',
              }}>
                <span>OUR RESEARCH AND DEVELOPMENT SERVICES</span><br />
                <span style={{ fontSize: '45px', color: 'blue' }}>
                    Our research products provide research intelligence automation {"  "}
                </span>
                <span style={{ fontSize: '45px', color: '#011f73' }}>
                    based in mathematics, analytically-rich data, and next-generation machine learning
                </span><br />
              </div>
              <div className='section2Services' style={{
                marginRight: '15%',
                marginLeft: '15%',
                marginTop: '5%',
                height: '50%',
              }}>
              <Table>
                <tbody>
                  <tr>
                    <td><ApartmentIcon /></td>
                    <td>
                      <span style={{ fontSize: '20px', color: '#011f73' }}>
                        AI Services
                      </span><br />
                      <span style={{ fontSize: '15px', color: '#011f73' }}>
                        In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.
                      </span>
                    </td>
                    <td><ApartmentIcon /></td>
                    <td>
                      <span style={{ fontSize: '20px', color: '#011f73' }}>
                        Software Development
                      </span><br />
                      <span style={{ fontSize: '15px', color: '#011f73' }}>
                        Our developers and designers are prepared to offer full-spectrum support to get your project from planning through to deployment.
                      </span>
                    </td>
                    <td><ApartmentIcon /></td>
                    <td>
                      <span style={{ fontSize: '20px', color: '#011f73' }}>
                        Data Engineering
                      </span><br />
                      <span style={{ fontSize: '15px', color: '#011f73' }}>
                        Design analytical, statistical, and programming tools to collect, analyze, and interpret 
                        large data sets to develop data-driven solutions to difficult business challenges.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><ApartmentIcon /></td>
                    <td>
                      <span style={{ fontSize: '20px', color: '#011f73' }}>
                        Defense Modernization
                      </span><br />
                      <span style={{ fontSize: '15px', color: '#011f73' }}>
                        We work with customers to improve and execute solutions at every project stage, from problem identification through sustainment.
                      </span>
                    </td>
                    <td><ApartmentIcon /></td>
                    <td>
                      <span style={{ fontSize: '20px', color: '#011f73' }}>
                        Interoperability Consulting
                      </span><br />
                      <span style={{ fontSize: '15px', color: '#011f73' }}>
                        Agility, risk analyses, etc - Market research and product/program enhancement
                      </span>
                    </td>
                    <td><ApartmentIcon /></td>
                    <td>
                      <span style={{ fontSize: '20px', color: '#011f73' }}>
                        Digital Transformation
                      </span><br />
                      <span style={{ fontSize: '15px', color: '#011f73' }}>
                        Advice and expertise to organisations to help them improve their business performance in terms of operations, profitability, management, structure and strategy.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
              </div>
              <div className='section1Services' style={{
                marginRight: '35%',
                marginLeft: '35%',
                marginTop: '5%',
                height: '50%',
                textAlign: 'center',
              }}>
                <span>OUR SOFTWARE PRODUCTS</span><br />
                <span style={{ fontSize: '45px', color: 'blue' }}>
                    Next-gen warfighting {"  "}
                </span>
                <span style={{ fontSize: '45px', color: '#011f73' }}>
                    demands tools that are responsive, distributed, and secure.
                </span><br />
                <span style={{ fontSize: '25px', color: '#011f73' }}>
                    We research and develop new and improved mathematical theories and approaches 
                    to solve problems of critical importance to the modern warfighter and defense community.
                </span><br />
              </div>
              <div className='section2Services' style={{
                marginRight: '25%',
                marginLeft: '25%',
                marginTop: '5%',
                height: '50%',
                textAlign: 'center'
              }}>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <div style={{ fontSize: '25px', color: '#011f73' }}>
                          iPOET
                        </div><br />
                        <div style={{ fontSize: '20px', color: '#011f73' }}>
                          <b>Acquisitions</b>
                        </div><br />
                        <div style={{ fontSize: '15px', color: '#011f73' }}>
                          Allows procurement officers and researchers to ingest and process vast amounts of data stored 
                          in traditional databases and across the open internet for rapid acquisitions planning.
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '25px', color: '#011f73' }}>
                          PRIOR
                        </div><br />
                        <div style={{ fontSize: '20px', color: '#011f73' }}>
                          <b>Risk Exposure</b>
                        </div><br />
                        <div style={{ fontSize: '15px', color: '#011f73' }}>
                          Our advanced solutions align maintainence, training, planning, and acquisitions processes to 
                          create missions which are which both field-ready and future-proof.
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '25px', color: '#011f73' }}>
                          MUSE
                        </div><br />
                        <div style={{ fontSize: '20px', color: '#011f73' }}>
                          <b>Mission Engineering</b>
                        </div><br />
                        <div style={{ fontSize: '15px', color: '#011f73' }}>
                          Assemble and coordinate international Subject Matter Expert teams to build responsive, analysis-rich 
                          missions across all warfare domains.
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <Button color="primary" onClick={() => this.setState({ selectedProject: "iPOET", projectOpen: true })}>LEARN MORE</Button>
                        </div>
                      </td>
                      <td>
                        <div>
                          <Button color="primary" onClick={() => this.setState({ selectedProject: "PRIOR", projectOpen: true })}>LEARN MORE</Button>
                        </div>
                      </td>
                      <td>
                        <div>
                          <Button color="primary" onClick={() => this.setState({ selectedProject: "MUSE", projectOpen: true })}>LEARN MORE</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Modal isOpen={this.state.projectOpen} toggle={this.toggleProjectOpen} scrollable={true} style={{ maxWidth: "80%" }} onClosed={() => this.setState({  })}>
                <ModalHeader>
                  {this.state.selectedProject}
                </ModalHeader>
                <ModalBody>
                  {projectDict[this.state.selectedProject]}
                </ModalBody>
              </Modal>

            <Footer />
        </div>
    );
  }
}

export default Services;