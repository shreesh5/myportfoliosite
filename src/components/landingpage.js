import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../assets/avatar.png';

class Landing extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1> Software Engineer | Data Scientist </h1>
                            <hr/>
                            <p> HTML/CSS | React | React Native | Python </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/shreeshnayak" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://www.github.com/shreesh5" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="banner-text">
                            <p> This is currently a work in progress. So far, I have followed this <nobr />
                                <a href="https://www.youtube.com/playlist?list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm" rel="noopener noreferrer" target="_blank">
                                     tutorial
                                </a>
                                <nobr /> on YouTube to learn more about React and to create a base for this website.
                                But as I said, this is far from complete, I will be modifying this heavily and adding
                                much more to it in the near future. Stay tuned! :)
                                <br/> Shout out to Paul Hanna for the amazing tutorial btw!
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Landing;