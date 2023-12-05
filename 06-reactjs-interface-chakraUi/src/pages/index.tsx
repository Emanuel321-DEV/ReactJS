import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Box, List, ListIcon, ListItem, Divider, Text, Heading, Flex, useBreakpointValue, Center } from '@chakra-ui/react';
import { VscCircleFilled } from "react-icons/vsc";
import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  Navigation, 
  Pagination,
  Mousewheel,
  Keyboard  } from "swiper"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Home: NextPage = () => {
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  }) 
  return (
    <Flex direction="column" height="100vh">
        <Header />
        <Image objectFit="cover" loading='lazy' alignSelf="center" w={1440} maxHeight={375} src={ isWideVersion ? "./images/home/banner-desktop.svg" : "./images/home/banner-mobile.svg"} alt="Imagem com texto: 5 continentes, infinitas possibilidades. Chegou a hora de tirar do papel a viagem que você sempre sonhou." />
        {isWideVersion ? (
              <Box width="80%" mx="auto" my="20">
                <Image loading='lazy' objectFit="cover" w="100%" maxHeight={375} src="./images/home/types-travel-desktop.svg" alt="" />
              </Box>       
        ) : (
          <List 
                    w="80%"
                    mx="auto"
                    display="flex"
                    flexWrap="wrap"
                    mt="10"
                    justifyContent="space-around"
                  >
                    <ListItem display="flex" alignItems="center" w="50%">
                        <ListIcon as={VscCircleFilled} color='yellow'/>
                        <Text fontWeight="medium"> Vida noturna </Text>
                    </ListItem>
                        
                    <ListItem  display="flex" alignItems="center" w="50%">
                        <ListIcon as={VscCircleFilled } color='yellow'/>
                        <Text fontWeight="medium"> Praia  </Text>  
                    </ListItem>


                    <ListItem display="flex" alignItems="center" w="50%">
                        <ListIcon as={VscCircleFilled } color='yellow'/>
                        <Text fontWeight="medium"> Moderno  </Text>  
                    </ListItem>


                    <ListItem display="flex" alignItems="center" w="50%">
                        <ListIcon as={VscCircleFilled } color='yellow'/>
                        <Text fontWeight="medium"> Clássico  </Text>  
                    </ListItem> 
                    
                    
                    <ListItem display="flex" alignItems="center" w="50%">
                        <ListIcon as={VscCircleFilled } color='yellow'/>
                        <Text fontWeight="medium"> E mais ...  </Text>  
                    </ListItem> 

          </List>
        ) }
      
       <Box mt="10" mb="1">
          <Heading 
              textAlign="center"
              fontWeight={500}
              fontSize={[20, 30]}
            >
                Vamos nessa ? <br/> Então escolha seu continente 
          </Heading>
          
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
        
          <SwiperSlide>
                  <Link href="/southamerica">
                  <Box>
                  <Image
                    cursor="pointer"
                    objectFit="cover" 
                    loading='lazy'
                    mt="10" 
                    width='100vw'
                    maxH={1440}
                    maxHeight={[250, 450]} 
                    src="./images/home/rio-de-janeiro.svg" 
                    alt="Imagem país"
                    />
                    <Box 
                      position="absolute" 
                      color="white" 
                      top="0" 
                      left="0"
                      bottom="0"
                      right="0"
                      width={300}
                      m="auto"
                      height={[10,1]}
                    >
                        <Heading textAlign="center" cursor="pointer">América do Sul</Heading>
                    </Box>
                  </Box>
                </Link> 
          </SwiperSlide>
          
          <SwiperSlide>
          <Link href="/europe">
          <Box>
                  <Image
                    cursor="pointer"
                    loading='lazy'
                    objectFit="cover" 
                    mt="10" 
                    width='100vw'
                    maxH={1440}
                    maxHeight={[250, 450]} 
                    src="./images/home/europe-home.svg" 
                    alt="Imagem país"
                    />

                    <Box 
                      position="absolute" 
                      color="white" 
                      top="0" 
                      left="0"
                      bottom="0"
                      right="0"
                      width={300}
                      m="auto"
                      height={[10,1]}
                    >
                        <Heading textAlign="center" cursor="pointer">Europa</Heading>
                    </Box>
                  </Box>
                  </Link>
          </SwiperSlide>
          <SwiperSlide color='red'>
            <Link href="/northamerica">
              <Box>
                  <Image
                    cursor="pointer"
                    loading='lazy'
                    objectFit="cover" 
                    mt="10" 
                    width='100vw'
                    maxH={1440}
                    maxHeight={[250, 450]}
                    src="./images/home/nova-york.png" 
                    alt="Imagem país"
                    />

                    <Box 
                      position="absolute" 
                      color="white" 
                      top="0" 
                      left="0"
                      bottom="0"
                      right="0"
                      width={300}
                      m="auto"
                      height={[10,1]}
                    >
                        <Heading textAlign="center" cursor="pointer">América do Norte</Heading>
                    </Box>
              </Box>
            </Link>           
          </SwiperSlide>
        </Swiper>
        </Box>
    </Flex>
  )
}

export default Home
