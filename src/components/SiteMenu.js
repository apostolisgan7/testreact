import React from 'react';
import {  Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import {IconButton} from "@chakra-ui/button";
import { HamburgerIcon } from '@chakra-ui/icons'
import {Link, Route, Routes} from "react-router-dom"


function SiteMenu(props) {
    return (
<>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                fontSize={"3rem"}
                p={"1rem"}
            />
            <MenuList>
                <Link to="/about"><MenuItem>ABOUT</MenuItem></Link>
                <Link to="/projects"><MenuItem>FEEL THE THRIVE</MenuItem></Link>
                <Link to="/contact"><MenuItem>CONTACT</MenuItem></Link>
            </MenuList>
        </Menu>
</>
    );
}

export default SiteMenu;