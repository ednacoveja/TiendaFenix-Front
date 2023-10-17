import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';


function Copyright() {
    return (
        <Typography variant="body2" color="theme.palette.background.contrario" align="center">
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
    const theme = useTheme();
    return (

        <Box sx={{bgcolor: theme.palette.background.default, p: 1 }} component="footer">
            <Copyright />
        </Box>)
}