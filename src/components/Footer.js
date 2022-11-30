import React from 'react';
import {ListItem, OrderedList} from '@chakra-ui/react'
import {Box, Flex, Heading} from "@chakra-ui/layout";

function Footer(props) {
    return (
        <Box  m={"6rem auto"}>
            <Box>
                <Heading fontSize={"4vw"} fontFamily={"DelaGothic"} textAlign={"center"} mt={"50"} mb={"50"}
                         color={"#d9ccbb"}>CRTV STUDIO.</Heading>
            </Box>
            <Box maxWidth={"1000px"} m={"0rem auto"}>
                <OrderedList m={"0"} listStyleType={"none"}>
                    <Flex gap={"20"} justify={"center"}>
                        <ListItem>FACEBOOK</ListItem>
                        <ListItem>INSTAGRAM</ListItem>
                        <ListItem>BEHANCE</ListItem>
                        <ListItem>VIMEO</ListItem>
                        <ListItem>E-MAIL</ListItem>
                    </Flex>
                </OrderedList>
            </Box>
        </Box>

    );
}

export default Footer;