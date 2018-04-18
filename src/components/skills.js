import React, { Component } from 'react';
import {Grid,Cell, ProgressBar} from 'react-mdl';


class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={1}>
                    <div style={{display: 'flex'}}>
                    {this.props.skill}:
                    </div>
                </Cell>
                <Cell col={11}>
                    <div>
                        <ProgressBar style={{margin:'auto', fontColor:'red'}} progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;
