import React from 'react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import {Flex} from "@chakra-ui/layout";

function Menu(props) {
    return (
        <OrderedList m={"0"} listStyleType={"none"}>
            <Flex gap={"20"}>
            <ListItem>MENU</ListItem>
            </Flex>
        </OrderedList>

    );
}

export default Menu;