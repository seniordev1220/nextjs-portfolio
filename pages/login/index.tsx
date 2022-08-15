import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import { login } from '../../services/users';
import Layout from '../../components/layout/layout';
import { useDarkMode } from '../../hooks/useDarkMode';
import useToken from '../../hooks/useToken';

const Login = (props: any) => {
    const { token, setToken } = useToken();
    const router = useRouter();
    const [loginData, setLoginData] = useState({ username: "", password: "" })
    const handleLogin = async () => {
        const response: any = await login(loginData);
        setToken(response.data)
        if (response?.data?.token) {
            router.push(
                {
                    pathname: `superadmin`,
                })
        }
        else{
            alert("Something went wrong - Password or UserName incorrect")
        }
    }
    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setLoginData(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (

        <Box sx={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"
        }
        } >
            <Box sx={{
                display: "flex", alignItems: "center", flexDirection: "column",
                backgroundColor: "#141414",
                color: "white",
                border: " solid 0.2px white"
            }}>

                <Box sx={{ margin: "1rem" }}>
                    <p>Username</p>
                    <TextField
                        sx={{ marginTop: "0.5rem", border: " solid 0.2px white" }}

                        name="username"
                        onChange={handleChange}
                        inputProps={{ style: { color: 'white' } }}
                        value={loginData.username} />
                </Box>

                <Box sx={{ margin: "1rem" }}>
                    <p>Password</p>
                    <TextField
                        sx={{ marginTop: "0.5rem", border: " solid 0.2px white" }}

                        name="password"
                        inputProps={{ style: { color: 'white' } }}
                        onChange={handleChange}
                        type="password" value={loginData.password} />
                </Box>

                <Box sx={{ margin: "1rem" }}>
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </Box>
            </Box>
        </Box>

    )
}
export default Login
