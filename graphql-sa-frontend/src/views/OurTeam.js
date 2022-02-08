import React, { Component } from 'react';

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import '../components/Style/ourteam.css';

import Sean from '../images/HeadShots/Sean_Headshot.jpg';
import Rachel from '../images/HeadShots/Rachel_Headshot.jpg';
import Ryan from '../images/HeadShots/Ryan_Headshot.JPG';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { 
  Tooltip,
  Modal, ModalBody, ModalHeader,
  Button,
  Table,
  Alert
} from 'reactstrap';

import { Image } from 'react-native';

let teamDict = {
  "Ryan Olk": `I look forward to contributing to an atmosphere of collegiality and mutual respect that rewards outstanding teaching and fosters active intellectual and creative engagement. I am always drawn to empowering others through mathematical competency.
  Responsible for overseeing all the research and development of analytical, statistical, and programming tools and algorithms to collect, analyze, and interpret large data sets to develop data-driven solutions to difficult business challenges.
  Additionally, I routinely conduct meetings with customers for discerning what data was to be collected and to what end. For example, worked with a law firm to determine which facets of their accounting department was best at predicting a future line of credit of up to a million dollars.`,
  "Sean Workman": `Sean Workman is the Head of Development for Sprout Technologies, where he develops web applications to automate and support the government in their day to day tasks.
  Before joining Sprout, he spent 4 years at Naval Surface Warfare Center Dahlgren (NSWCDD-DNA) under the R&D sector developing new applied research technologies and capabilities for the U.S. Department of Defense. He started directly out of college as a Software Engineer and quickly became a Senior Software Engineer helping lead and deliver new software applications for the DoD. In his most recent role he was the Technical Lead and Principal Investigator for projects under the AI and Cloud Computing Group at NSWCDD-DNA.
  Sean is currently pursuing a Masters in Computer Science at Old Dominion University. He has a B.S. in Computer Science from Christopher Newport University where he spent his 4 years tutoring, researching, and developing classes for the Computer Science department.
  Sean lives in Virginia Beach, Virginia on the oceanfront where he surfs and enjoys spending time on the beach with friends. He was born and raised in Burke, Virginia just outside D.C. and travels back to see family and friends often. `,
  "Rachel Hofford": `Rachael is a self-motivated and success-driven business development manager focusing on providing data research tools and artificial intelligence driven analytical solutions to current and future customers.  Ms. Hofford represents Sprout Technologies, as part of the Navy International Programs Office Management team, providing recommendations for tool functionality, and cross integration with other AI tools and knowledge-based systems.
  Within her portfolio Rachael supports the identification of advanced technology via market research, pairing results with defense system’s programs of record and major upgrades.  At her disposal is the Navy's International Program Opportunity Engagement Tool (iPOET) which she was on the original development team, working closely with software developers providing system testing and troubleshooting (from a user standpoint).  The Navy customer views Ms. Hofford as the face of iPOET when briefing potential users, vested stakeholders and Navy leadership. To date she continues to interact directly with the Office of the Under Secretary Defense, Acquisition & Sustainment, Director International Cooperation (OUSD A&S, IC), and the Director OUSD Research & Engineering (R&E) International Outreach & Policy (IO&P), the Naval Sea Systems Command (NAVSEA), and the Naval Information Warfare Systems Command (NAVWAR), along with the Chief Technology Officer for the Marine Corps Systems Command (MCSM).  Additionally, Rachael provides detailed market and technical research assistance to generate reports based on information desired by the requesting clients.  Her reports and networking provide crucial information to executive client leadership allowing for more open discussions on capabilities and requirements harmonization for a vast suite of programs. Additionally, Rachael provides direction to develop new functional enhancements as a direct outcome of customer interaction and client in-depth training.
  As the Business Development Manager for Sprout Ms. Hofford works with the Department of Agriculture and its vast client base to identify and create various AI driven tools that provide solutions to crop and land management.  As such, Rachael was able to identify growth areas within the agriculture community related to the integration of advanced technologies from cube satellite sensors and artificial intelligence crop mapping.   Additionally, led by Ms. Hofford, Sprout will be able to provide its current and future customer base a capability to investigate government investments, including advanced technology, agricultural, via university grants, contract awards, and basic research and development.
  When not working Rachael enjoys spending time with her husband and three children, family and friends.`,
  "John Paul Laverde": `TBD`,
  "Alex Nielsen": `TBD`
};

class OurTeam extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedMember: 'John Paul Laverde',
      bioOpen: false,
      alertMessage: "",
      showDangerAlert: false,
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

  toggleBioOpen = () => {
    this.setState({
      bioOpen: !this.state.bioOpen
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

            <div id="container">
            <NavBar />
              <div className='section1Team'>
                <span>OUR TEAM</span><br />
                <span style={{ fontSize: '45px', color: 'blue' }}>
                    The best collaborations {"  "}
                </span>
                <span style={{ fontSize: '45px', color: '#011f73' }}>
                    come from people who know your working environment.
                </span><br />
                <span style={{ color: '#011f73' }}>
                    That's why we focus on retaining great defense professionals and providing them to 
                    resources and tools that help them grow and succeed.
                </span><br />
                <span style={{
                  marginRight: "25%",
                  marginLeft: "25%",
                  marginTop: "5%",
                }}>
                <Table>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <br /><br />
                        <button className='bioButton' onClick={() => this.setState({ selectedMember: "John Paul Laverde", bioOpen: true })}>
                          <AccountCircleIcon style={{ transform: 'scale(4)' }} /></button>
                        <br /><br />
                        <div style={{ color: '#011f73' }}>
                          <b>John Paul Laverde</b><br />
                          Founder, CEO
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <br /><br />
                        <button className='bioButton' onClick={() => this.setState({ selectedMember: "Alex Nielsen", bioOpen: true })}>
                          <AccountCircleIcon style={{ transform: 'scale(4)' }} /></button>
                        <br /><br />
                        <div style={{ color: '#011f73' }}>
                          <b>Alex Nielsen</b><br />
                          Co-Founder, CIO
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: 'center' }} onClick={() => this.setState({ selectedMember: "Rachel Hofford", bioOpen: true })}>
                        <button className='bioButton' onClick={() => this.setState({ selectedMember: "Rachel Hofford", bioOpen: true })}>
                          <Image style={{
                          width: 100,
                          height: 100,
                          borderRadius: 150 / 2,
                          overflow: 'hidden',
                          borderWidth: 3,
                          alignSelf: 'center'
                        }} source={Rachel} /></button>
                        <div style={{ color: '#011f73' }}>
                          <b>Rachel Hofford</b><br />
                          Head of Research
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <button className='bioButton' onClick={() => this.setState({ selectedMember: "Ryan Olk", bioOpen: true })}>
                          <Image style={{
                          width: 100,
                          height: 100,
                          borderRadius: 150 / 2,
                          overflow: 'hidden',
                          borderWidth: 3,
                          alignSelf: 'center'
                        }} source={Ryan} /></button>
                        <div style={{ color: '#011f73' }}>
                          <b>Ryan Olk</b><br />
                          Head of Data Science
                        </div> 
                        
                      </td>
                      <td style={{ textAlign: 'center' }}>
                      <button className='bioButton' onClick={() => this.setState({ selectedMember: "Sean Workman", bioOpen: true })}>
                        <Image style={{
                          width: 100,
                          height: 100,
                          borderRadius: 150 / 2,
                          overflow: 'hidden',
                          borderWidth: 3,
                          alignSelf: 'center'
                        }} source={Sean} /></button>
                        <div style={{ color: '#011f73' }}>
                          <b>Sean Workman</b><br />
                          Head of Development
                        </div>
                      
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </span>
              </div>

            </div>

            <Modal isOpen={this.state.bioOpen} toggle={this.toggleBioOpen} scrollable={true} style={{ maxWidth: "80%" }} onClosed={() => this.setState({  })}>
                <ModalHeader>
                  {this.state.selectedMember}
                </ModalHeader>
                <ModalBody>
                  {teamDict[this.state.selectedMember]}
                </ModalBody>
            </Modal>
            <Footer />
        </div>
    );
  }
}

export default OurTeam;