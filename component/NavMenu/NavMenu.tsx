'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react';

import { AcmeLogo } from '../Icons/AcmeLogo';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function NavMenu() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  console.log('NavMenu  theme:', theme);
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className=" flex gap-4" justify="center">
        <NavbarItem isActive={true}>
          <Link
            className="bg-green-400 p-4 dark:bg-orange-400"
            color="foreground"
            href="#"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            onClick={handleTheme}
            color="primary"
            href="#"
            variant="flat"
          >
            {theme}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
