import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography className="header" variant="h4" style={{ flexGrow: '1' }}>REACT ROUTER</Typography>
                    <div className="navbar">
                        <Link className="nav-link" to="">Home</Link>
                        <Link className="nav-link" to="about">About</Link>
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}
