import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';
import { Link } from 'react-router';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7ac 89%)' }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{display:'flex'}}>
                            <MenuItem sx={{ display: 'flex', gap: 2 }} component={Link} to={"/"}>
                                <Group fontSize='large' />
                                <Typography variant='h4' fontWeight='bold'>Reactivities</Typography>
                            </MenuItem>
                            <MenuItem component={Link} to={"/activities"} sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Activities
                            </MenuItem>
                            <MenuItem component={Link} to={"/createActivity"} sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Cerate Activity
                            </MenuItem>
                        </Box>
                        <MenuItem>User Menu</MenuItem>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
