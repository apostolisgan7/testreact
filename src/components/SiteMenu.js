import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import {Box, VStack} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";


function SiteMenu() {
    const [isShown, setIsShown] = useState(true);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };
    return (
        <>
            <Box>
                <Button onClick={handleClick}  position={"relative"} zIndex={"2"}>MENU</Button>
                <Box className={"menu_wrapper"} style={{display: isShown ? 'none' : 'flex'}} position={"fixed"} bg={"#000308"} top={"0"} left={"0"} right={"0"} bottom={"0"} height={"100vh"}
                justifyContent={"center"} alignItems={"center"} zIndex={"1"}>
                    <VStack className={"menu_inner"} fontSize={"3rem"}>
                        <Link onClick={handleClick} to="/about">ABOUT</Link>
                        <Link onClick={handleClick} to="/projects">FEEL THE THRIVE</Link>
                        <Link onClick={handleClick} to="/contact">CONTACT</Link>
                    </VStack>
                </Box>
            </Box>
        </>
    );
}

export default SiteMenu;