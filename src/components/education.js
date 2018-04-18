import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Education extends Component {
    render() {
        return (
                <Grid className="education-grid">
                    <Cell col={2}>
                    <p style={{fontSize:'20px'}}>{this.props.startYear} - { this.props.endYear}</p>
                    </Cell>
                    <Cell style={{marginTop:'0px', marginBottom:'0px'}} col={10}>
                        <h4 style={{fontWeight:'250px', marginTop: '0px', marginBottom:'0px'}}>{this.props.schoolName}</h4>
                        <p style={{fontSize: '20px', marginBottom:'0px'}}>{this.props.schoolDescription}</p>
                    </Cell>
                </Grid>
        )
    }
}

export default Education;
