import React from 'react'
import { Grid } from 'semantic-ui-react';

const EventDashboard = (props) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <h2>left column</h2>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>right column</h2>
            </Grid.Column>
        </Grid>
    )
}
export default EventDashboard;