import React, { Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Joanna Wu</h2>
                        <img
                        src="./images/myPic1.jpg"
                        style={{height: '250px'}}
                        alt="myPic"
                        />
                        <p>
                        Joanna Wu is interested in working on building real interesting applications.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                              <ListItem >
                                <ListItemContent className="list-item-content" icon="person">
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (201) 658 4820
                                </ListItemContent>
                              </ListItem>
                              <ListItem >
                                <ListItemContent className="list-item-content" icon="person">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                    <a href="mailto:jiaowcg88@gmail.com?Subject=Hello%20again" target="_top">jiaowcg88@gmail.com</a>
                                </ListItemContent>
                              </ListItem>
                              <ListItem >
                                <ListItemContent className="list-item-content" icon="person">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                    <a href="https://github.com/jiaowcg88" rel="noopener noreferrer" target="_blank">
                                    github.com/jiaowcg88
                                    </a>
                                </ListItemContent>
                              </ListItem>
                              <ListItem >
                                <ListItemContent className="list-item-content" icon="person">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    <a href="https://www.linkedin.com/in/jiao-joanna-wu-66744ba8/" rel="noopener noreferrer" target="_blank"> LinkedIn
                                    </a>
                                </ListItemContent>
                              </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
