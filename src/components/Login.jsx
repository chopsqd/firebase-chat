import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from 'firebase/compat/app';

function Login() {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

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
                        <Button
                            variant={"outlined"}
                            onClick={login}
                        >
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;