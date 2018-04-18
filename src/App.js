import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
              <Layout>
                  <Header className ="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">Joanna Wu </Link>} scroll>
                      <Navigation>
                          <Link to="/aboutme">ABOUT ME</Link>
                          <Link to="/resume">RESUME</Link>
                          <Link to="/projects">PROJECTS</Link>
                          <Link to="/contact">CONTACT</Link>
                      </Navigation>
                  </Header>
                  <Drawer title={<Link style={{textDecoration: 'none', color:'black'}} to="/">Joanna Wu </Link>}>
                      <Navigation>
                          <Link to="/aboutme">About Me</Link>
                          <Link to="/resume">Resume</Link>
                          <Link to="/projects">Projects</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Drawer>
                  <Content>
                      <div className="page-content" />
                      <Main />
                  </Content>
                  <Footer size="mini" style={{height:"25px",padding:'1.5em', background:'#222'}}>
                    <FooterSection logo="@2018">
                        <FooterLinkList >
                            <a href="/aboutme">About</a>
                            <a href="/">Joanna Site</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>

              </Layout>

        </div>
    );
  }
}

export default App;
