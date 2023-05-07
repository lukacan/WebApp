import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles
            id="tsparticles"
            params={{
                particles: {
                    number: {
                        value: 0
                    },
                    collisions: {
                        enable: false
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "edge"
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.6 }
                    },
                    size: {
                        value: { min: 0.5, max: 7 }
                    },
                    move: {
                        enable: true,
                        size: true,
                        speed: 2,
                        direction: "none",
                        outModes: {
                            default: "destroy"
                        },
                        trail: {
                            enable: true,
                            fillColor: "#000000",
                            length: 3
                        }
                    },
                    repulse: {}
                },
                detectRetina: true,
                background: {
                    color: "#000"
                },
                emitters: [{
                    direction: "top-left",
                    rate: {
                        delay: 1,
                        quantity: 4
                    },
                    position: {
                        x: 70,
                        y: 75
                    },
                    life: {
                        count: 10
                    }
                },
                {
                    direction: "top-right",
                    rate: {
                        delay: 1,
                        quantity: 4
                    },
                    position: {
                        x: 70,
                        y: 75
                    },
                    life: {
                        count: 10
                    }
                },],

            }}
        />
    );
}

export default Particle;
