import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/ednacoveja">
                GitHub
            </Link>{' '}
            {' © '}
            <Link color="inherit" href="https://www.linkedin.com/in/candelaria-ovejero-9802a9157/">
                LinkedIn
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (

        <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
            <Copyright />
        </Box>)
}