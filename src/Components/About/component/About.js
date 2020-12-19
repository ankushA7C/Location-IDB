import React from 'react';
import './style.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function About() {
    return (
        <div className="about-container">
            <div className="row">
                <div className="col-md-12">
                    <iframe className="custom-css" src={'https://www.youtube.com/embed/Fbvn77jC4mU'}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    />
                </div>
                <div className="col-md-12 text-align-center m-15">
                    <div className="row">
                        <div className="col-md-3"><a href="https://github.com/ankushA7C" target="_blank"><GitHubIcon style={{ fontSize: 70, color: 'white', cursor: 'pointer' }} /></a></div>
                        <div className="col-md-3"><a href="https://in.linkedin.com/in/ankush-chourasia-57632012a" target="_blank"><LinkedInIcon style={{ fontSize: 80, color: 'white', cursor: 'pointer' }} /></a></div>
                        <div className="col-md-3"><a href="https://twitter.com/ankusha7c" target="_blank"><TwitterIcon style={{ fontSize: 70, color: 'white', cursor: 'pointer' }} /></a></div>
                        <div className="col-md-3"><a href="https://iamtechnicaldeveloper.blogspot.com/" target="_blank"><BookIcon style={{ fontSize: 70, color: 'white', cursor: 'pointer' }} /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}