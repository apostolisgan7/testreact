import React from 'react';
import {Box, Heading, HStack} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useColorMode} from "@chakra-ui/color-mode";
import SiteMenu from "./SiteMenu";

function Header(props) {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <div>
            <HStack justifyContent={"space-between"}  p={5}>
                <Box size="md">
                    <SiteMenu/>
                </Box>
                <Box>
                    <Heading size="md" textTransform={"uppercase"}  fontSize={"2xl"}> CRTV Studio.</Heading>
                </Box>
                <Box>
                    <Button size='sm' onClick={toggleColorMode}>
                        Toggle Mode
                    </Button>
                </Box>
            </HStack>
        </div>
    );
}

export default Header;