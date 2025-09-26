import {
  Box,
  Burger,
  Drawer,
  Group,
  ScrollArea,
  Text,
  Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/Courses', label: 'Courses' },
  { to: '/Events', label: 'Events' },
  { to: '/Testimonials', label: 'Testimonials' },
];

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const navItems = navLinks.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.activeLink : ''}`
      }
      onClick={closeDrawer}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Box>
      <header className={classes.header} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem', height: '60px' }}>
        {/* Logo / Site Name */}
        <Text component={Link} to="/" className={classes.logo} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Being <span>Zero</span>
        </Text>

        {/* Desktop Links */}
        <Group spacing="md" className={classes.desktopNav} style={{ display: 'flex' }}>
          {navItems}
        </Group>

        {/* Burger Menu for mobile */}
        <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.mobileBurger} />
      </header>
    </Box>
  );
}
