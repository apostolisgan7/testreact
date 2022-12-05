import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <ChakraProvider>
                <ColorModeScript initialColorMode="light"></ColorModeScript>
                <App/>
            </ChakraProvider>
        </BrowserRouter>
);

