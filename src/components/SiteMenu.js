import React from 'react';
import {  Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import {Flex} from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";
import { HamburgerIcon } from '@chakra-ui/icons'

function SiteMenu(props) {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                fontSize={"3rem"}
                p={"1rem"}
            />
            <MenuList>
                <MenuItem>
                   FEEL THE THRIVE
                </MenuItem>
                <MenuItem>
                    ABOUT
                </MenuItem>
                <MenuItem>
                   PROJECTS
                </MenuItem>
                <MenuItem>
                  CONTACT
                </MenuItem>
            </MenuList>
        </Menu>

    );
}

export default SiteMenu;