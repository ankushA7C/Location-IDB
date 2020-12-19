import React, { Component } from "react";
import Particles from 'react-particles-js';

class Particle extends Component {

    render() {
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        );
    };

}
export default Particle;