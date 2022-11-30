import React from 'react';
import {Box, Flex, Heading} from "@chakra-ui/layout";
import {Image, Text} from '@chakra-ui/react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger);
const { useEffect, useRef } = React;

function HeroSection(props) {
    const el = useRef();
    useEffect(() => {
        gsap.to(".image_hero", {
            scale: 1.2,
            duration: 1,
            scrollTrigger: {
                trigger: ".trigger_box",
                toggleActions: 'play none none reverse',

            }
        });
    }, []);
    return (
        <Flex p={5} justifyContent={"space-around"} alignItems={"center"} p={5} w={"100%"}>
            <Box w={"100%"}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Box display={"block"} p={"5"} textAlign={"center"}>
                        <Heading fontFamily={"DelaGothic"} pb={"5"} fontSize={"7vw"}>RUNNIN' THROUGH ME MEMORY LANE</Heading>
                        <Text maxWidth={"50%"} m={"auto"} opacity={"0.7"} pb={"10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus ornare nisi ac ullamcorper. In sit amet justo tellus. Donec auctor sit amet dolor.</Text>
                        {/*<Button letterSpacing={"2"}>GET STARTED</Button>*/}
                    </Box>
                    <Box className={"image_hero"} w={"100%"}>
                        <Image h={"80vh"} borderRadius={"50px"} objectFit={"cover"} pt={5} w={"100%"} src='https://images.unsplash.com/photo-1542727568-395b760e571d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                               alt='Dan Abramov'/>
                    </Box>
                    <Box className={"trigger_box"} p={5}></Box>
                </Flex>
            </Box>
        </Flex>

    );
}

export default HeroSection;