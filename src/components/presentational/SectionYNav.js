import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import IconButton from 'material-ui/IconButton'

import FaAngleUp from 'react-icons/lib/fa/angle-up'
import FaAngleDown from 'react-icons/lib/fa/angle-down'


const styles = {
    root: {
        display: 'grid',
        gridAutoFlow: 'row',
        width: 'fit-content',
        gridArea: 'SectionYNav',
    },
}

class SectionYNav extends Component {
    render() {
        const { 
            classes,
            sectionSwitchY,
         } = this.props
        return (
            <div className={classes.root}>
                <IconButton onClick={()=>sectionSwitchY(true)} aria-label="Up">
                    <FaAngleUp />
                </IconButton>
                <IconButton onClick={()=>sectionSwitchY(false)} aria-label="Down">
                    <FaAngleDown />
                </IconButton>
            </div>
        )
    }
}

export default withStyles(styles)(SectionYNav)
