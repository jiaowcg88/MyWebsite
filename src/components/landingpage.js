import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style ={ {width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col ={12}>
                        <img
                            src="./images/myPic1.jpg"
                            alt="myPic"
                            className="myPic-img"
                        />
                        <div className="banner-text">
                            <h1>Software Developer || Web Developer</h1>
                            <hr/>
                            <p>Java | JavaScript | HTML/CSS | React | Bootstrap </p>
                            <div className ="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/jiao-joanna-wu-66744ba8/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*GitHub*/}
                                <a href="https://github.com/jiaowcg88" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;
