import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/layout";
import PageTransition from "../components/PageTransition";

function About(props) {
    return (
        <>
            <PageTransition>
                <Box p={"10"} mt={"20"}>
                    <Heading textShadow={"10px 12px 3px #ffffff1f"} fontFamily={"DelaGothic"} textAlign={"center"}
                             mt={"0"} mb={"10"} color={"#d9ccbb"}>SEE THE WORLD THROUGH OUR REARVIEW</Heading>
                    <Text columnCount={"2"} fontSize={"16px"} style={{columnCount: "2", lineHeight: "30px"}}
                          opacity={"0.7"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus eros, viverra et elementum
                        vitae, euismod id ante. Suspendisse pellentesque porttitor magna quis commodo. Aenean tincidunt
                        nulla sed faucibus cursus. Etiam finibus nunc ac nibh faucibus laoreet. Donec lobortis felis
                        justo, et ultricies diam consectetur at. Suspendisse molestie auctor sapien quis congue. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus eros, viverra et elementum
                        vitae, euismod id ante. Suspendisse pellentesque porttitor magna quis commodo. Aenean tincidunt
                        nulla sed faucibus cursus. Etiam finibus nunc ac nibh faucibus laoreet. Donec lobortis felis
                        justo, et ultricies diam consectetur at. Suspendisse molestie auctor sapien quis congue. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce purus nulla, congue nec gravida ac, accumsan et augue. Vivamus feugiat eget metus iaculis
                        lobortis. In vel sapien nisl. Maecenas ornare lacus ut mattis lobortis.Fusce purus nulla, congue
                        nec gravida ac, accumsan et augue. Vivamus feugiat eget metus iaculis lobortis. In vel sapien
                        nisl. Maecenas ornare lacus ut mattis lobortis. Praesent a commodo felis, at ullamcorper ligula.
                        Morbi non sodales lacus, ut vehicula justo. Donec eget felis magna. Mauris a ex gravida, posuere
                        elit quis, placerat est. Integer id pharetra sapien. Sed a feugiat ante, pulvinar posuere arcu.
                        Nam bibendum lorem dolor, vel viverra diam volutpat dignissim. Nunc eu erat non arcu dignissim
                        rhoncus ac et lectus.
                    </Text>
                </Box>
            </PageTransition>
        </>
    );
}

export default About;