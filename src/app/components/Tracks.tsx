"use client"
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    useBreakpointValue,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Center,
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react';
  import { BsFillArrowRightCircleFill } from "react-icons/bs";
  
  export default function Tracks() {
    return (
      <Box py={12} fontSize={{ base: 'sm', sm: 'lg', md: 'xl' }}>
        <Container maxW='1280px'>
        
        <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2022/04/06/ca2d3750-4119-4a0b-92b5-44c91e34995e_b01e9f3c.jpg?itok=_BouJ7TM'
            }
          />
        </Flex>
        <Flex flex={1}>
          <Stack spacing={6} w={'full'} pl={6}>
          <Stack as={Box}  >
          <Heading
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>
            <Text as={'span'} color={'green.400'}>
            Specialized Tracks
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          </Stack>
        </Stack>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                     Web 3.0 (Blockchain) and Metaverse Specialization
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                  This Web 3.0 and Metaverse specialization focuses on developing full-stack experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Artificial Intelligence & Deep Learning Specialization
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                  The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Cloud-Native Computing Specialization
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 <Text>
                 The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                 </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Ambient Computing and IoT Specialization
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text>
                The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
                </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Flex>
      </Stack>
      </Container>
      </Box>
    );
  }