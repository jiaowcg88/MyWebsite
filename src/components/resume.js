import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import image1 from '../images/woman_technologist.png'


class Resume extends Component {
    render() {
        return (
            <div style={{width: '100%', backgroundColor: 'lightblue'}}>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center', paddingTop:'40px', paddingLeft:'20px', width:'80%'}}>
                            <img
                                src = {image1}
                                alt="womanTechnologist"
                                style={{height: '250px'}} />
                            <h2>Joanna Wu</h2>
                            <h4>Master Student at New York University</h4>
                            <div style={{textAlign:'center'}}>
                                <p >
                                    <a href="/images/Joanna_Wu.pdf" download>
                                        <i className="fa fa-file" aria-hidden ="true" style={{color: "white"}}></i> DOWNLOAD RESUME
                                    </a>
                                </p>
                                <hr style={{borderTop:'3px solid black',textAlign:'center'}} />
                            </div>
                            <div style={{textAlign:'justify'}}>
                                <p style={{fontSize: '20px'}}>
                                A new graduate with passion on problem solving and real application developing, are proficient in programming, developing, testing and debugging code as well
                                as designing interfaces.
                                </p>
                                <hr style={{borderTop:'3px solid black'}} />
                            </div>
                            <h4>Address: </h4>
                            <p style={{fontSize:'16px'}}>6020C 194th Apt. 2C, Fresh Meadows, 11365</p>
                            <h4>Phone: </h4>
                            <p style={{fontSize:'16px'}} className="fa fa-phone-square"> (201)658-4820</p>
                            <h4>Email: </h4>
                            <p style={{fontSize:'16px'}} className="fa fa-envelope-square">
                            <a href="mailto:jiaowcg88@gmail.com?Subject=Hello%20again" target="_top"> jiaowcg88@gmail.com </a></p>
                            <h4>Website:</h4>
                            <p style={{fontSize:'16px'}} >mywebsite.com</p>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8} >
                    <div style={{fontSize:'25px'}}>
                        <h3>Education</h3>
                            <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="New York University"
                            schoolDescription="Master Science in Computer Science, GPA: 3.86"/>
                            <Education
                            startYear={2015}
                            endYear={2016}
                            schoolName="CUNY"
                            schoolDescription="Equivalent B.S. Computer Science, GPA: 3.82"/>
                            <Education
                            startYear={2010}
                            endYear={2015}
                            schoolName="St.John's University"
                            schoolDescription="Ph.D candidate in Pharmaceutical Science, GPA: 3.6"/>
                        <hr style={{borderTop: '3px solid black', marginTop:'auto', marginBottom:'2px'}} />
                        <h3>Experience</h3>
                        <Experience
                        startMonth={5}
                        startYear={2016}
                        endMonth={8}
                        endYear={2016}
                        jobName="NYC Department of Citywide Administrative Services"
                        jobDescription={

                            <ul>
                                <li>Collaborated with manager on writing user stories for e-procurement system development by Agile Methodologies.</li>
                                <li>Created wireframes for Web Page Design of agency-contract application system using Balsamic Mockups.</li>
                                <li>Processed large amount of data from Excel spreadsheet and Microsoft Word to Microsoft Access databases.</li>
                            </ul>

                         } />
                        <hr style={{borderTop: '3px solid black', marginTop:'auto', marginBottom:'2px'}} />
                        <h3>Skills</h3>
                        <Skills
                        skill="Java"
                        progress={100}
                        />
                        <Skills
                        skill="JavaScript"
                        progress={80}
                        />
                        <Skills
                        skill="HTML/CSS"
                        progress={70}
                        />
                        <Skills
                        skill="React"
                        progress={60}
                        />
                        <Skills
                        skill="NodeJS"
                        progress={50}
                        />
                        <Skills
                        skill="C++"
                        progress={50}
                        />
                        <Skills
                        skill="Python"
                        progress={50}
                        />
                        <Skills
                        skill="MongoDB"
                        progress={50}
                        />
                        <Skills
                        skill="MySQL"
                        progress={75}
                        />
                        <Skills
                        skill="Redux"
                        progress={25}
                        />


                    </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
