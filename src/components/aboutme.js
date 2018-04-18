import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme-grid" style={{backgroundSize:'cover'}}>
                <Grid>
                    <Cell className ="aboutme-cell" col={12}>
                    <h1>Welcome to My Profile</h1>
                    <img
                    src="./images/woman_technologist.png"
                    alt="favicon"
                    />
                    <div className="aboutme-text">
                        <p>
                        Hello!
                        </p>
                        <p>
                        I am <span> Joanna Wu</span>, master student in computer science, studying at New York University.
                        I am seeking for front-end || back-end software engineer focused on building beautiful interfaces & experiences.
                        </p>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;
