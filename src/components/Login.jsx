import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

function Login() {
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
                    style={{width: '400px', background: "lightgray"}}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;