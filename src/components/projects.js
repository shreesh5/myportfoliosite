import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardTitle, CardMenu, Button, IconButton, CardText} from 'react-mdl';
class Projects extends Component {
    
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }
    
    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> GiftoLexia </CardTitle>
                        <CardText>
                            A mobile app designed using React-Native to facilitate teaching to dyslexic students.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}> My Portfolio </CardTitle>
                        <CardText>
                            Work in Progress!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>            
            )
        } else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px'}}> Faculty Task Management System </CardTitle>
                        <CardText>
                            Coming soon!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px'}}> Project Classification using Machine Learning Web Application </CardTitle>
                        <CardText>
                            Coming soon!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>    
            )
        } else if(this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px'}}> Classification of Sign Language Hand Gestures </CardTitle>
                        <CardText>
                            Coming soon!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px'}}> Enhanced Multi-Object Learning using MEEM </CardTitle>
                        <CardText>
                            Coming soon!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px' }}> Stock Movement Prediction Using Twitter </CardTitle>
                        <CardText>
                            Work in Progress!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
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
        return(
            <div class="category-tabs">
                
                <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({ activeTab: tabId}) } ripple>
                    <Tab>React + Native</Tab>
                    <Tab>Web Applications</Tab>
                    <Tab>Machine Learning</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
        
            
            </div>
        );
    };
};

export default Projects;