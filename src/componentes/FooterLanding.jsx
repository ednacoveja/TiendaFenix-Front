import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from '@mui/material';

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

export default function Footer({ darkMode, onDarkModeToggle }) {
    const theme = useTheme();

    const handleDarkModeToggle = () => {
        onDarkModeToggle();
    };

    return (
        <Box sx={{ bgcolor: theme.palette.background.default, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} component="footer">
            <Copyright />
            <Button onClick={handleDarkModeToggle} style={{ color: theme.palette.secondary.main }}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
        </Box>
    );
}
