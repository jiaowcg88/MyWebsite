import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={2}>
                <p style={{fontWeight:'bold', fontSize: '15px'}}>{this.props.startMonth} . {this.props.startYear} - {this.props.endMonth} . { this.props.endYear}</p>
                </Cell>
                <Cell col={10}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    {this.props.jobDescription}
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
