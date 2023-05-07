import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Solana Auditor",
                    "Web3 Developer",
                    "Blockchain Enjoyer",
                    "Deep Learning Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
