import React from 'react';
import {Container, Grid} from "@mui/material";

function Loader() {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    direction={"column"}
                >
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;