import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Inicio', 'Fotos', 'Sobre mi', 'Contacto'];





const NavBar = (props) => {



  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleMenuItemClick = (page) => {
    switch (page) {
      case "Inicio":
        navigate("/")
        break;
      case "Fotos":
        navigate("/Fotos");
        break;
      case "Sobre mi":
        navigate("/sobre-mi"); 
        break;
      case "Contacto":
        navigate("/Contacto");
        break;
      default:
        navigate("/");
    }
  };
  

  {navItems.map((setting) => (
    <MenuItem 
      key={setting}
      onClick={() => handleMenuItemClick(setting)}
    >
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  ))}


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SD Fotografías
      </Typography>
      <Divider />
      <List>
  {navItems.map((item) => (
    <ListItem key={item} disablePadding>
      <ListItemButton 
        sx={{ textAlign: "center" }} 
        component={Link} 
        to={`/${item.replace(/\s/g, '-').toLowerCase()}`}
      >
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background: 'transparent',
      color: '#f8bbd0',
      boxShadow: 'rgb(190 195 253) 0px 4px 15px',
      backdropFilter: 'blur(2px)',
      backgroundColor: 'transparent',
      padding: '5px', }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: 'transparent',
        color: '#f8bbd0',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'transparent',
        padding: '5px',}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SD FOTOGRAFIAS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => handleMenuItemClick(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}


export default NavBar