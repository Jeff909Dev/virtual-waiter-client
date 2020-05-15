import React, { Component } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

const pageStyle = {
    position: "inherit"
};

class AppTransition extends Component {
    render() {
        return (
            <AnimatePresence>
                <motion.div style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} >
                    {this.props.children}
                </motion.div>
            </AnimatePresence>
        );
    }
}

export default AppTransition;