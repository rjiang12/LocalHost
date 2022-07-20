import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import React from 'react';
import Event from './Event'

const ProfilePastEventsDisplay = props => {
    // TO DO: RENDER PAST EVENTS FROM PASSED DOWN PROPS

    return (
        <div className = "ProfilePastEventsDisplay">
            <Event/>
        </div>
    )
}

export default ProfilePastEventsDisplay;