import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Box, Heading, Text} from "@chakra-ui/layout";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modulesnpm
import { Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Heading textShadow={"10px 12px #ffffff1f"} fontFamily={"DelaGothic"} textAlign={"center"} mt={"100"} color={"#d9ccbb"}>THRIVE MOMENTS</Heading>
            <Box mt={"50"} mb={"0"} pb={"70"} style={{transform:"rotate(-2deg)"}}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{background: "grey",height:"30vh"}}>Slide 1</SwiperSlide>
                <SwiperSlide style={{background: "grey",height:"30vh"}}>Slide 2</SwiperSlide>
                <SwiperSlide style={{background: "grey",height:"30vh"}}>Slide 3</SwiperSlide>
                <SwiperSlide style={{background: "grey",height:"30vh"}}>Slide 4</SwiperSlide>
                <SwiperSlide style={{background: "grey",height:"30vh"}}>Slide 5</SwiperSlide>
                <SwiperSlide style={{background: "grey",height:"30vh"}}>Slide 6</SwiperSlide>
            </Swiper>
            </Box>
            <Box p={"10"}>
            <Heading textShadow={"10px 12px #ffffff1f"} fontFamily={"DelaGothic"} textAlign={"left"} mt={"0"} mb={"10"} color={"#d9ccbb"}>JOIN US NOW!</Heading>
            <Text columnCount={"2"} fontSize={"16px"} style={{columnCount:"2", lineHeight:"30px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus eros, viverra et elementum vitae, euismod id ante. Suspendisse pellentesque porttitor magna quis commodo. Aenean tincidunt nulla sed faucibus cursus. Etiam finibus nunc ac nibh faucibus laoreet. Donec lobortis felis justo, et ultricies diam consectetur at. Suspendisse molestie auctor sapien quis congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce purus nulla, congue nec gravida ac, accumsan et augue. Vivamus feugiat eget metus iaculis lobortis. In vel sapien nisl. Maecenas ornare lacus ut mattis lobortis. Praesent a commodo felis, at ullamcorper ligula. Morbi non sodales lacus, ut vehicula justo. Donec eget felis magna. Mauris a ex gravida, posuere elit quis, placerat est. Integer id pharetra sapien. Sed a feugiat ante, pulvinar posuere arcu. Nam bibendum lorem dolor, vel viverra diam volutpat dignissim. Nunc eu erat non arcu dignissim rhoncus ac et lectus.
            </Text>
            </Box>
        </>
    );
}
