//"use client"

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function LoginPage() {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`mail : ${id}\n password : ${password}`);
        alert(`mail : ${id}\n password : ${password}`);
    }

    return(
        <Container maxWidth="sm">
            <Box textAlign="center" mt={8}>
                <Typography variant="h4" component="h1" gutterBottom>
                    ログイン
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            label="ID"
                            variant="outlined"
                            fullWidth
                            required
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        ログイン
                    </Button>
                </form>
            </Box>
        </Container>
    )
}