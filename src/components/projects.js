import React, { Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* #Project 1*/}
                    <Card className ="projects-grid-card"shadow={0} >
                        <CardTitle
                        className ="projects-grid-title"
                        style={{ background:'url(./images/bookstore.png)', backgroundSize:"300px 200px", color:"white",backgroundRepeat: 'no-repeat', backgroundPosition:"center",
                        padding:"60px 80px"}}>
                        BookStore Shopping Cart App</CardTitle>
                        <CardText className ="projects-grid-text" style={{textAlign:"justify"}}>
                        This BookStore App is created by React and Redux after Learning a course of Full Stack Universal React with Rdux, Node.js and MongoDB @Udemy.
                        The main function of this APP is to display book List which can be added by Admin and to implement a real shopping cart process
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/jiaowcg88/BookStoreApp"> GitHub</a></Button>
                            <Button colored><a href="http://bookstore.2nwyeuqm3t.us-east-1.elasticbeanstalk.com/">App Link</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* #Project 2*/}
                    <Card className ="projects-grid-card"shadow={0}  >
                        <CardTitle className ="projects-grid-title"
                        style={{ backgroundColor:'lightblue', backgroundSize:"300px 200px", color:"white",backgroundRepeat: 'no-repeat',
                        backgroundPosition:"center",
                        padding:"80px 80px"}}>
                        Todo List App
                        </CardTitle>
                        <CardText className ="projects-grid-text" style={{textAlign:"justify"}}>
                        The reminder APP is created by React and Redux. The main function
                        of App to add items to the todo list.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://github.com/jiaowcg88/Reminder-App"> GitHub</a></Button>
                            <Button colored><a href="https://jiaowcg88.github.io/Reminder-App/">App link</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* #Project 3*/}
                    <Card className ="projects-grid-card"shadow={0} >
                        <CardTitle className ="projects-grid-title"
                        style={{ background:'url(./images/goHiking.png)', backgroundSize:"300px 200px", backgroundRepeat: 'no-repeat', backgroundPosition:"center",
                        padding:"80px 80px"}}>
                        </CardTitle>
                        <CardText className ="projects-grid-text">
                        Go Hiking Website was developed for users to add new hiking places,
                        view, comment or edit a posted place.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/jiaowcg88/FunHiking"> GitHub</a>
                            </Button>
                            <Button colored><a href="https://dry-coast-39587.herokuapp.com/"> Website</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* #Project 1*/}
                    <Card className ="projects-grid-card" shadow={0}>
                        <CardTitle className ="projects-grid-title" style={{ background:'url(https://achievement-images.teamtreehouse.com/badges_java_basics_Stage1.png)', backgroundSize:"200px 180px", color:"black",backgroundRepeat: 'no-repeat', backgroundPosition:"center"
                    }}>Twitter Account Bot Detection </CardTitle>
                        <CardText className ="projects-grid-text">
                            Implementation of tic tac toe in java
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/jiaowcg88/Artificial-Intelligence-Game-design">GitHub</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* #Project 1*/}
                    <Card className ="projects-grid-card" shadow={0}>
                        <CardTitle className ="projects-grid-title" style={{ background:'url(https://pbs.twimg.com/profile_images/875087697177567232/Qfy0kRIP.jpg)', backgroundSize:"150px 150px", color:"black"
                    }}>Twitter Account Bot Detection </CardTitle>
                        <CardText className ="projects-grid-text">
                            The objective of this project is to classify bot accounts among all twitter accounts based on Maching learning classification models. The project applied three alogrithms, including logistic regression, naive bayes, random forest to classify accounts.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/jiaowcg88/Machine-Learning-Project">GitHub</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React & NodeJS</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                     <div className="content">
                         {this.toggleCategories()}
                     </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;
