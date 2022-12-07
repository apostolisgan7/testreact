import React from 'react';
import {Box, Heading, HStack} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useColorMode} from "@chakra-ui/color-mode";
import SiteMenu from "./SiteMenu";
import {Link } from "react-router-dom"

function Header(props) {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <div>
            <HStack justifyContent={"space-between"}  p={5}>
                <Box size="md">
                    <SiteMenu/>
                </Box>
                <Box>
                    <Link to="/"> <Heading size="md" fontFamily={"DelaGothic"} textTransform={"uppercase"}  fontSize={"2xl"}> CRTV Studio.</Heading> </Link>
                </Box>
                <Box  position={"relative"} zIndex={"2"}>
                    <Button size='sm' onClick={toggleColorMode}>
                        Toggle Mode
                    </Button>
                </Box>
            </HStack>
        </div>
    );
}

export default Header;